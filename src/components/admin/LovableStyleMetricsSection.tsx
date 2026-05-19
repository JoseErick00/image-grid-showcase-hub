import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MousePointerClick, TrendingUp, Globe, Smartphone } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Props {
  metrics: {
    totalClicks: number;
    totalConversions: number;
    clicksByPlatform: Record<string, number>;
    clicksByType: Record<string, number>;
    clicksByDay: Array<{ date: string; clicks: number }>;
    clicksByHour?: Array<{ hour: string; clicks: number }>;
    clicksByPage?: Array<{ page: string; count: number }>;
    clicksByDevice?: Record<string, number>;
    clicksByReferrer?: Array<{ referrer: string; count: number }>;
    geoMetrics?: {
      clicksByCountry?: Record<string, number>;
      clicksByCity?: Array<{ city: string; region: string; country: string; count: number }>;
    };
  };
  period: string; // "1" | "7" | "30" | ...
}

const TopList = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: number }>;
}) => {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.length === 0 && (
          <div className="text-xs text-muted-foreground py-4 text-center">Sem dados</div>
        )}
        {items.slice(0, 8).map((item) => (
          <div key={item.label} className="relative">
            <div
              className="absolute inset-y-0 left-0 bg-primary/10 rounded"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
            <div className="relative flex items-center justify-between px-2 py-1.5 text-sm">
              <span className="truncate max-w-[70%]" title={item.label}>{item.label}</span>
              <span className="font-semibold tabular-nums">{item.value.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const LovableStyleMetricsSection = ({ metrics, period }: Props) => {
  const useHourly = period === "1" && metrics.clicksByHour && metrics.clicksByHour.length > 0;

  const chartData = useHourly
    ? metrics.clicksByHour!.map((p) => ({
        label: new Date(p.hour).toLocaleTimeString("pt-BR", { hour: "2-digit" }) + "h",
        clicks: p.clicks,
      }))
    : metrics.clicksByDay.map((p) => ({
        label: new Date(p.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
        clicks: p.clicks,
      }));

  const topPlatform = Object.entries(metrics.clicksByPlatform).sort((a, b) => b[1] - a[1])[0];
  const topCountry = Object.entries(metrics.geoMetrics?.clicksByCountry || {}).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const platformItems = Object.entries(metrics.clicksByPlatform)
    .map(([label, value]) => ({ label: label.charAt(0).toUpperCase() + label.slice(1), value }))
    .sort((a, b) => b.value - a.value);

  const typeItems = Object.entries(metrics.clicksByType)
    .map(([label, value]) => ({
      label: label.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      value,
    }))
    .sort((a, b) => b.value - a.value);

  const pageItems = (metrics.clicksByPage || []).map((p) => ({ label: p.page, value: p.count }));

  const countryItems = Object.entries(metrics.geoMetrics?.clicksByCountry || {})
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const cityItems = (metrics.geoMetrics?.clicksByCity || []).map((c) => ({
    label: `${c.city}${c.region ? ` / ${c.region}` : ""}`,
    value: c.count,
  }));

  const deviceItems = Object.entries(metrics.clicksByDevice || {})
    .map(([label, value]) => ({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      value,
    }))
    .filter((i) => i.value > 0)
    .sort((a, b) => b.value - a.value);

  const referrerItems = (metrics.clicksByReferrer || []).map((r) => ({
    label: r.referrer,
    value: r.count,
  }));

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cliques</CardTitle>
            <MousePointerClick className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">
              {metrics.totalClicks.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card title="Visitantes que chegaram com utm_source na URL. Não representa conversão de venda.">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Visitas com UTM
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">
              {metrics.totalConversions.toLocaleString()}
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Visitantes com utm_source na URL
            </div>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Plataforma top</CardTitle>
            <Smartphone className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">{topPlatform?.[0] || "-"}</div>
            <div className="text-xs text-muted-foreground">
              {(topPlatform?.[1] || 0).toLocaleString()} cliques
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">País top</CardTitle>
            <Globe className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{topCountry?.[0] || "-"}</div>
            <div className="text-xs text-muted-foreground">
              {(topCountry?.[1] || 0).toLocaleString()} cliques
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time-series chart */}
      <Card>
        <CardHeader>
          <CardTitle>Cliques no tempo {useHourly ? "(últimas 24h)" : ""}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="clickGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 6,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#clickGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top lists grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TopList title="Top Páginas" items={pageItems} />
        <TopList title="Top Plataformas" items={platformItems} />
        <TopList title="Top Países" items={countryItems} />
        <TopList title="Top Tipos de Clique" items={typeItems} />
        <TopList title="Top Cidades" items={cityItems} />
        <TopList title="Dispositivo" items={deviceItems} />
        <TopList title="Top Referrers" items={referrerItems} />
      </div>
    </div>
  );
};

export default LovableStyleMetricsSection;
