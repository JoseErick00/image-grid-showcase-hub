import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Smartphone, Monitor, Download, XCircle, CheckCircle, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

interface PwaMetricsData {
  summary: {
    totalEvents: number;
    modalOpened: number;
    installClicked: number;
    installSuccess: number;
    installDismissed: number;
    okUnderstood: number;
    modalClosed: number;
    alreadyInstalled: number;
  };
  conversionRates: {
    clickRate: string;
    successRate: string;
    overallConversion: string;
  };
  platformBreakdown: Record<string, number>;
  browserBreakdown: Record<string, number>;
  inAppBrowserBreakdown: Record<string, number>;
  dailyMetrics: Record<string, { opened: number; success: number; dismissed: number }>;
  recentEvents: Array<{
    id: string;
    event_type: string;
    platform: string;
    browser: string;
    is_in_app_browser: boolean;
    in_app_browser_name: string | null;
    created_at: string;
  }>;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d'];

const eventTypeLabels: Record<string, string> = {
  'modal_opened': 'Modal Aberto',
  'install_button_clicked': 'Clicou Instalar',
  'install_success': 'Instalação OK',
  'install_dismissed': 'Cancelou',
  'ok_understood_clicked': 'OK Entendi',
  'modal_closed': 'Fechou Modal',
  'open_in_browser_clicked': 'Abrir no Navegador',
  'share_clicked': 'Compartilhou',
  'already_installed_shown': 'Já Instalado',
};

const PwaMetricsSection = () => {
  const [metrics, setMetrics] = useState<PwaMetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('pwa-metrics');
      
      if (error) throw error;
      if (data?.success) {
        setMetrics(data.data);
      } else {
        throw new Error(data?.error || 'Failed to fetch PWA metrics');
      }
    } catch (err) {
      console.error('Error fetching PWA metrics:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Carregando métricas PWA...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Erro ao carregar métricas: {error}</p>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Nenhuma métrica disponível ainda.</p>
      </div>
    );
  }

  // Prepare chart data
  const funnelData = [
    { name: 'Modal Aberto', value: metrics.summary.modalOpened },
    { name: 'Clicou Instalar', value: metrics.summary.installClicked },
    { name: 'Instalou', value: metrics.summary.installSuccess },
  ];

  const platformData = Object.entries(metrics.platformBreakdown).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const browserData = Object.entries(metrics.browserBreakdown).map(([name, value]) => ({
    name,
    value,
  }));

  const dailyData = Object.entries(metrics.dailyMetrics)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, data]) => ({
      date: date.slice(5), // MM-DD format
      abertos: data.opened,
      sucesso: data.success,
      cancelados: data.dismissed,
    }));

  const chartConfig = {
    abertos: { label: "Modais Abertos", color: "#0088FE" },
    sucesso: { label: "Instalações", color: "#00C49F" },
    cancelados: { label: "Cancelados", color: "#FF8042" },
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Modais Abertos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.summary.modalOpened}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Download className="w-4 h-4" />
              Clicou Instalar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.summary.installClicked}</div>
            <p className="text-xs text-muted-foreground">{metrics.conversionRates.clickRate} dos modais</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Instalações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{metrics.summary.installSuccess}</div>
            <p className="text-xs text-muted-foreground">{metrics.conversionRates.successRate} dos cliques</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500" />
              Abandonos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{metrics.summary.installDismissed}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.summary.modalClosed} fecharam modal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Rate Highlight */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Taxa de Conversão Geral</p>
            <p className="text-4xl font-bold text-primary">{metrics.conversionRates.overallConversion}</p>
            <p className="text-xs text-muted-foreground mt-1">
              (Modal Aberto → Instalação Concluída)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Funnel Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Funil de Instalação</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <BarChart data={funnelData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#0088FE" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Platform Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Por Plataforma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {platformData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Daily Timeline */}
      {dailyData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Últimos 7 Dias</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <LineChart data={dailyData}>
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="abertos" stroke="#0088FE" strokeWidth={2} />
                <Line type="monotone" dataKey="sucesso" stroke="#00C49F" strokeWidth={2} />
                <Line type="monotone" dataKey="cancelados" stroke="#FF8042" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}

      {/* Browser Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Por Navegador
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {browserData.map((browser) => (
              <Badge key={browser.name} variant="secondary" className="text-sm">
                {browser.name}: {browser.value}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* In-App Browser Stats */}
      {Object.keys(metrics.inAppBrowserBreakdown).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">In-App Browsers (bloqueiam instalação)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {Object.entries(metrics.inAppBrowserBreakdown).map(([name, count]) => (
                <Badge key={name} variant="destructive" className="text-sm">
                  {name}: {count}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Events Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Eventos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Plataforma</TableHead>
                <TableHead>Navegador</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metrics.recentEvents.slice(0, 20).map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <Badge 
                      variant={
                        event.event_type === 'install_success' ? 'default' : 
                        event.event_type === 'install_dismissed' ? 'destructive' : 
                        'secondary'
                      }
                    >
                      {eventTypeLabels[event.event_type] || event.event_type}
                    </Badge>
                  </TableCell>
                  <TableCell className="capitalize">{event.platform}</TableCell>
                  <TableCell>
                    {event.browser}
                    {event.is_in_app_browser && (
                      <span className="text-xs text-red-500 ml-1">
                        ({event.in_app_browser_name})
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(event.created_at)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PwaMetricsSection;
