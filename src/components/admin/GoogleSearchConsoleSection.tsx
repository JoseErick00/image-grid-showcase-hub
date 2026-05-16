import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, AlertCircle, RefreshCw, Search, MousePointerClick, Eye, TrendingUp } from "lucide-react";

type DaysOption = "7" | "28" | "90";
const DAYS_OPTIONS: { value: DaysOption; label: string }[] = [
  { value: "7", label: "Últimos 7 dias" },
  { value: "28", label: "Últimos 28 dias" },
  { value: "90", label: "Últimos 90 dias" },
];

interface StatusData {
  registered: boolean;
  site: string;
  sitemap: string;
  sitemapInfo: any;
}

interface MetricsData {
  range: { startDate: string; endDate: string; days: number };
  totals: { clicks: number; impressions: number; ctr: number; position: number } | null;
  byDate: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  byQuery: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  byPage: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  byCountry: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  byDevice: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  sitemap: any;
}

const num = (n: number | undefined) => (n ?? 0).toLocaleString("pt-BR");
const pct = (n: number | undefined) => `${((n ?? 0) * 100).toFixed(2)}%`;
const pos = (n: number | undefined) => (n ?? 0).toFixed(1);

const GoogleSearchConsoleSection = () => {
  const [status, setStatus] = useState<StatusData | null>(null);
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [metricsLoading, setMetricsLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [days, setDays] = useState<DaysOption>("28");

  const call = async (action: string, extra: Record<string, any> = {}) => {
    const { data, error } = await supabase.functions.invoke("gsc-console", {
      body: { action, ...extra },
    });
    if (error) throw error;
    return data;
  };

  const loadStatus = async () => {
    try {
      setLoading(true);
      const data = await call("status");
      setStatus(data);
      if (data.registered) await loadMetrics(days);
    } catch (e: any) {
      toast({ title: "Erro ao consultar GSC", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const loadMetrics = async (d: DaysOption) => {
    try {
      setMetricsLoading(true);
      const data = await call("metrics", { days: Number(d) });
      if (data.success === false) throw new Error(data.error || "Falha ao carregar métricas");
      setMetrics(data);
    } catch (e: any) {
      toast({ title: "Erro ao carregar métricas", description: e.message, variant: "destructive" });
    } finally {
      setMetricsLoading(false);
    }
  };

  const runVerify = async () => {
    try {
      setActionLoading("verify");
      const data = await call("verify");
      if (data.success) {
        toast({ title: "Tudo certo!", description: data.message });
        await loadStatus();
      } else {
        toast({
          title: `Falhou em "${data.step}"`,
          description: data.hint || JSON.stringify(data.error)?.slice(0, 300),
          variant: "destructive",
        });
      }
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" });
    } finally {
      setActionLoading(null);
    }
  };

  const runSubmitSitemap = async () => {
    try {
      setActionLoading("sitemap");
      const data = await call("submit-sitemap");
      if (data.success) {
        toast({ title: "Sitemap resubmetido" });
        await loadStatus();
      } else {
        toast({ title: "Falha", description: JSON.stringify(data.error)?.slice(0, 300), variant: "destructive" });
      }
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" });
    } finally {
      setActionLoading(null);
    }
  };

  useEffect(() => {
    loadStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status?.registered) loadMetrics(days);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  if (loading) {
    return <div className="text-center py-8 text-muted-foreground">Carregando status do Google Search Console...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Setup / Status card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Google Search Console — Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Propriedade:</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">{status?.site}</code>
            {status?.registered ? (
              <Badge className="bg-green-600 gap-1"><CheckCircle2 className="h-3 w-3" /> Verificada</Badge>
            ) : (
              <Badge variant="destructive" className="gap-1"><AlertCircle className="h-3 w-3" /> Não verificada</Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Sitemap:</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">{status?.sitemap}</code>
            {status?.sitemapInfo ? (
              <Badge variant="secondary">
                {status.sitemapInfo.contents?.[0]?.submitted || 0} URLs submetidas
                {status.sitemapInfo.lastSubmitted ? ` · ${new Date(status.sitemapInfo.lastSubmitted).toLocaleDateString("pt-BR")}` : ""}
              </Badge>
            ) : (
              <Badge variant="outline">Não submetido</Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button onClick={runVerify} disabled={actionLoading !== null} size="sm">
              {actionLoading === "verify" ? "Verificando..." : status?.registered ? "Re-verificar & resubmeter" : "Verificar & registrar agora"}
            </Button>
            <Button onClick={runSubmitSitemap} disabled={actionLoading !== null || !status?.registered} size="sm" variant="outline">
              {actionLoading === "sitemap" ? "Enviando..." : "Resubmeter sitemap"}
            </Button>
            <Button onClick={loadStatus} disabled={actionLoading !== null} size="sm" variant="ghost">
              <RefreshCw className="h-4 w-4 mr-1" /> Atualizar status
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Após cada publicação do site, clique em <strong>Re-verificar & resubmeter</strong> para garantir que a meta
            tag esteja live e o sitemap atualizado seja informado ao Google.
          </p>
        </CardContent>
      </Card>

      {/* Metrics */}
      {status?.registered && (
        <>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">Performance na Busca</h3>
            <Select value={days} onValueChange={(v: DaysOption) => setDays(v)}>
              <SelectTrigger className="w-[200px] bg-white"><SelectValue /></SelectTrigger>
              <SelectContent>
                {DAYS_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {metricsLoading || !metrics ? (
            <div className="text-center py-8 text-muted-foreground">Carregando métricas...</div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Cliques</CardTitle>
                    <MousePointerClick className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent><div className="text-2xl font-bold">{num(metrics.totals?.clicks)}</div></CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Impressões</CardTitle>
                    <Eye className="h-4 w-4 text-indigo-500" />
                  </CardHeader>
                  <CardContent><div className="text-2xl font-bold">{num(metrics.totals?.impressions)}</div></CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">CTR</CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent><div className="text-2xl font-bold">{pct(metrics.totals?.ctr)}</div></CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Posição média</CardTitle>
                    <Search className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent><div className="text-2xl font-bold">{pos(metrics.totals?.position)}</div></CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle className="text-base">Top consultas</CardTitle></CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Termo</TableHead>
                            <TableHead className="text-right">Cliques</TableHead>
                            <TableHead className="text-right">Impr.</TableHead>
                            <TableHead className="text-right">Pos.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {metrics.byQuery.length === 0 ? (
                            <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">Sem dados ainda</TableCell></TableRow>
                          ) : metrics.byQuery.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell className="text-xs">{r.keys[0]}</TableCell>
                              <TableCell className="text-right">{num(r.clicks)}</TableCell>
                              <TableCell className="text-right">{num(r.impressions)}</TableCell>
                              <TableCell className="text-right">{pos(r.position)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-base">Top páginas</CardTitle></CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>URL</TableHead>
                            <TableHead className="text-right">Cliques</TableHead>
                            <TableHead className="text-right">Impr.</TableHead>
                            <TableHead className="text-right">CTR</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {metrics.byPage.length === 0 ? (
                            <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">Sem dados ainda</TableCell></TableRow>
                          ) : metrics.byPage.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell className="text-xs max-w-[260px] truncate" title={r.keys[0]}>{r.keys[0].replace("https://www.ineedbrasil.com.br", "")}</TableCell>
                              <TableCell className="text-right">{num(r.clicks)}</TableCell>
                              <TableCell className="text-right">{num(r.impressions)}</TableCell>
                              <TableCell className="text-right">{pct(r.ctr)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-base">Por país</CardTitle></CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>País</TableHead>
                          <TableHead className="text-right">Cliques</TableHead>
                          <TableHead className="text-right">Impressões</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {metrics.byCountry.length === 0 ? (
                          <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground">Sem dados</TableCell></TableRow>
                        ) : metrics.byCountry.map((r, i) => (
                          <TableRow key={i}>
                            <TableCell className="uppercase text-xs">{r.keys[0]}</TableCell>
                            <TableCell className="text-right">{num(r.clicks)}</TableCell>
                            <TableCell className="text-right">{num(r.impressions)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle className="text-base">Por dispositivo</CardTitle></CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Dispositivo</TableHead>
                          <TableHead className="text-right">Cliques</TableHead>
                          <TableHead className="text-right">Impressões</TableHead>
                          <TableHead className="text-right">CTR</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {metrics.byDevice.length === 0 ? (
                          <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">Sem dados</TableCell></TableRow>
                        ) : metrics.byDevice.map((r, i) => (
                          <TableRow key={i}>
                            <TableCell className="capitalize text-xs">{r.keys[0].toLowerCase()}</TableCell>
                            <TableCell className="text-right">{num(r.clicks)}</TableCell>
                            <TableCell className="text-right">{num(r.impressions)}</TableCell>
                            <TableCell className="text-right">{pct(r.ctr)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <p className="text-xs text-muted-foreground">
                Dados do Google Search Console. Latência típica: 1-3 dias. Período: {metrics.range.startDate} → {metrics.range.endDate}.
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GoogleSearchConsoleSection;
