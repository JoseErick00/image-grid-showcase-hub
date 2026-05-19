import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const PLATFORM_COLORS: Record<string, string> = {
  shopee: "#EE4D2D",
  aliexpress: "#E43225",
  amazon: "#FF9900",
  alibaba: "#FF6A00",
  unknown: "#6B7280",
};

interface Props {
  metrics: {
    clicksByDay: Array<{ date: string; clicks: number }>;
    clicksByDayPlatform?: Array<Record<string, number | string>>;
    platforms?: string[];
    clicksByHourOfDay?: Array<{ hour: number; clicks: number }>;
    clicksByPageDetailed?: Array<{ page: string; clicks: number; uniqueSessions: number }>;
    geoMetrics?: {
      clicksByCity?: Array<{ city: string; region: string; country: string; count: number }>;
    };
  };
}

const downloadCSV = (filename: string, rows: Array<Record<string, any>>) => {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => JSON.stringify(r[h] ?? "")).join(",")),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

const AffiliateClicksDetailedSection = ({ metrics }: Props) => {
  const [tab, setTab] = useState("byday");
  const platforms = metrics.platforms || [];
  const dailyData = (metrics.clicksByDayPlatform || metrics.clicksByDay.map((d) => ({ date: d.date, clicks: d.clicks }))).map((row) => ({
    ...row,
    label: new Date(row.date as string).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }),
  }));

  const hourData = (metrics.clicksByHourOfDay || []).map((p) => ({
    hour: `${String(p.hour).padStart(2, "0")}h`,
    clicks: p.clicks,
  }));

  const pageRows = metrics.clicksByPageDetailed || [];
  const cityRows = metrics.geoMetrics?.clicksByCity || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatório detalhado de cliques afiliados</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="byday">Por dia</TabsTrigger>
            <TabsTrigger value="byhour">Por hora do dia</TabsTrigger>
            <TabsTrigger value="bypage">Por página</TabsTrigger>
            <TabsTrigger value="bylocal">Por local</TabsTrigger>
          </TabsList>

          {/* ===== BY DAY ===== */}
          <TabsContent value="byday" className="space-y-4 pt-4">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadCSV("clicks-by-day.csv", dailyData)}
              >
                <Download className="h-4 w-4 mr-1" /> CSV
              </Button>
            </div>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="label" tick={{ fontSize: 11 }} />
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
                  {platforms.length > 0 ? (
                    platforms.map((p) => (
                      <Bar
                        key={p}
                        dataKey={p}
                        stackId="a"
                        fill={PLATFORM_COLORS[p] || PLATFORM_COLORS.unknown}
                        name={p}
                      />
                    ))
                  ) : (
                    <Bar dataKey="clicks" fill="hsl(var(--primary))" />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    {platforms.map((p) => (
                      <TableHead key={p} className="capitalize">{p}</TableHead>
                    ))}
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dailyData.map((row: any) => {
                    const total = platforms.reduce((s, p) => s + ((row[p] as number) || 0), 0) || (row.clicks as number) || 0;
                    return (
                      <TableRow key={row.date}>
                        <TableCell>{row.label}</TableCell>
                        {platforms.map((p) => (
                          <TableCell key={p}>{(row[p] as number) || 0}</TableCell>
                        ))}
                        <TableCell className="font-semibold">{total}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* ===== BY HOUR OF DAY ===== */}
          <TabsContent value="byhour" className="space-y-4 pt-4">
            <p className="text-xs text-muted-foreground">
              Distribuição agregada por hora do dia (fuso América/São Paulo) no período selecionado.
            </p>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourData}>
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
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          {/* ===== BY PAGE ===== */}
          <TabsContent value="bypage" className="space-y-4 pt-4">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadCSV("clicks-by-page.csv", pageRows)}
              >
                <Download className="h-4 w-4 mr-1" /> CSV
              </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Página</TableHead>
                    <TableHead>Cliques</TableHead>
                    <TableHead>Sessões únicas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground">
                        Sem dados
                      </TableCell>
                    </TableRow>
                  ) : (
                    pageRows.map((r) => (
                      <TableRow key={r.page}>
                        <TableCell className="font-mono text-xs">{r.page}</TableCell>
                        <TableCell>{r.clicks}</TableCell>
                        <TableCell>{r.uniqueSessions}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* ===== BY LOCAL ===== */}
          <TabsContent value="bylocal" className="space-y-4 pt-4">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadCSV("clicks-by-city.csv", cityRows)}
              >
                <Download className="h-4 w-4 mr-1" /> CSV
              </Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cidade</TableHead>
                    <TableHead>Região</TableHead>
                    <TableHead>País</TableHead>
                    <TableHead>Cliques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cityRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        Sem dados
                      </TableCell>
                    </TableRow>
                  ) : (
                    cityRows.map((r, idx) => (
                      <TableRow key={`${r.city}-${r.region}-${idx}`}>
                        <TableCell>{r.city}</TableCell>
                        <TableCell>{r.region}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{r.country}</Badge>
                        </TableCell>
                        <TableCell>{r.count}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AffiliateClicksDetailedSection;
