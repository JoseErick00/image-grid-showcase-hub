import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

/**
 * São Paulo (UTC-3, no DST) day boundaries.
 * offsetDays = 0  -> today (SP), 0:00 -> now (or 24:00 if past)
 * offsetDays = -1 -> yesterday full day (SP)
 */
function spDayBounds(offsetDays: number) {
  const now = new Date();
  // Shift to SP wall clock
  const spNow = new Date(now.getTime() - 3 * 3600 * 1000);
  spNow.setUTCHours(0, 0, 0, 0);
  spNow.setUTCDate(spNow.getUTCDate() + offsetDays);
  // Convert back to UTC
  const start = new Date(spNow.getTime() + 3 * 3600 * 1000);
  const end = new Date(start.getTime() + 24 * 3600 * 1000);
  return { start: start.toISOString(), end: end.toISOString() };
}

interface Bucket {
  totalClicks: number;
  totalPageViews: number;
  uniqueVisitors: number;
  totalConversions: number;
  clicksByHour: Array<{ hour: string; clicks: number }>;
}

const Delta = ({ today, yesterday }: { today: number; yesterday: number }) => {
  if (yesterday === 0 && today === 0) return <span className="text-xs text-muted-foreground">—</span>;
  if (yesterday === 0)
    return (
      <span className="text-xs text-green-600 flex items-center gap-1">
        <TrendingUp className="h-3 w-3" /> novo
      </span>
    );
  const pct = ((today - yesterday) / yesterday) * 100;
  const up = pct >= 0;
  return (
    <span
      className={`text-xs flex items-center gap-1 ${up ? "text-green-600" : "text-red-600"}`}
    >
      {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
      {up ? "+" : ""}
      {pct.toFixed(1)}%
    </span>
  );
};

const StatCard = ({
  label,
  today,
  yesterday,
}: {
  label: string;
  today: number;
  yesterday: number;
}) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-2xl font-bold tabular-nums">{today.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">
            Ontem: <span className="tabular-nums">{yesterday.toLocaleString()}</span>
          </div>
        </div>
        <Delta today={today} yesterday={yesterday} />
      </div>
    </CardContent>
  </Card>
);

const CompareTodayYesterdaySection = () => {
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState<Bucket | null>(null);
  const [yesterday, setYesterday] = useState<Bucket | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const todayRange = spDayBounds(0);
        const yRange = spDayBounds(-1);

        const fetchBucket = async (range: { start: string; end: string }): Promise<Bucket> => {
          const [aff, adm] = await Promise.all([
            supabase.functions.invoke("affiliate-metrics", { body: { range } }),
            supabase.functions.invoke("admin-metrics", { body: { range } }),
          ]);
          if (aff.error) throw aff.error;
          if (adm.error) throw adm.error;
          return {
            totalClicks: aff.data?.data?.totalClicks || 0,
            totalConversions: aff.data?.data?.totalConversions || 0,
            clicksByHour: aff.data?.data?.clicksByHour || [],
            totalPageViews: adm.data?.data?.summary?.totalPageViews || 0,
            uniqueVisitors: adm.data?.data?.summary?.uniqueVisitors || 0,
          };
        };

        const [t, y] = await Promise.all([fetchBucket(todayRange), fetchBucket(yRange)]);
        setToday(t);
        setYesterday(y);
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Erro ao carregar comparação");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  if (loading) return <div className="text-center py-8">Carregando comparação...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Erro: {error}</div>;
  if (!today || !yesterday) return null;

  // Build merged hourly chart data (00h..23h)
  const hourOf = (iso: string) => {
    const d = new Date(new Date(iso).getTime() - 3 * 3600 * 1000);
    return d.getUTCHours();
  };
  const yByHour: Record<number, number> = {};
  yesterday.clicksByHour.forEach((p) => (yByHour[hourOf(p.hour)] = p.clicks));
  const tByHour: Record<number, number> = {};
  today.clicksByHour.forEach((p) => (tByHour[hourOf(p.hour)] = p.clicks));

  const chartData = Array.from({ length: 24 }, (_, h) => ({
    hour: `${String(h).padStart(2, "0")}h`,
    Hoje: tByHour[h] || 0,
    Ontem: yByHour[h] || 0,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">Dados em tempo real (Supabase) · fuso América/São Paulo</Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Visitas (page views)" today={today.totalPageViews} yesterday={yesterday.totalPageViews} />
        <StatCard label="Visitantes únicos" today={today.uniqueVisitors} yesterday={yesterday.uniqueVisitors} />
        <StatCard label="Cliques afiliados" today={today.totalClicks} yesterday={yesterday.totalClicks} />
        <StatCard label="Visitas com UTM" today={today.totalConversions} yesterday={yesterday.totalConversions} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cliques por hora — Hoje vs Ontem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 6,
                    fontSize: 12,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Ontem"
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="4 4"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Hoje"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompareTodayYesterdaySection;
