import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MousePointerClick, ArrowLeftRight, TrendingUp, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts";

interface AffiliateMetrics {
  totalClicks: number;
  totalConversions: number;
  clicksByPlatform: Record<string, number>;
  clicksByType: Record<string, number>;
  clicksByDay: Array<{ date: string; clicks: number }>;
  conversionsBySource: Record<string, number>;
  recentClicks: Array<{
    id: string;
    platform: string;
    item_name: string | null;
    click_type: string;
    created_at: string;
  }>;
  recentConversions: Array<{
    id: string;
    utm_source: string | null;
    utm_campaign: string | null;
    page_url: string | null;
    created_at: string;
  }>;
}

interface AffiliateMetricsSectionProps {
  metrics: AffiliateMetrics;
}

const PLATFORM_COLORS: Record<string, string> = {
  shopee: '#EE4D2D',
  aliexpress: '#E43225',
  amazon: '#FF9900',
  alibaba: '#FF6A00',
  unknown: '#6B7280',
};

const TYPE_COLORS: Record<string, string> = {
  product: '#3B82F6',
  banner_promo: '#10B981',
  banner_small: '#8B5CF6',
  banner_hero: '#F59E0B',
};

const AffiliateMetricsSection = ({ metrics }: AffiliateMetricsSectionProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const platformChartData = Object.entries(metrics.clicksByPlatform).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    color: PLATFORM_COLORS[name] || PLATFORM_COLORS.unknown,
  }));

  const typeChartData = Object.entries(metrics.clicksByType).map(([name, value]) => ({
    name: name.replace('_', ' ').charAt(0).toUpperCase() + name.replace('_', ' ').slice(1),
    value,
    color: TYPE_COLORS[name] || '#6B7280',
  }));

  const dailyChartData = metrics.clicksByDay.map(item => ({
    date: new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    clicks: item.clicks,
  }));

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total de Cliques</CardTitle>
            <MousePointerClick className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalClicks.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Conversões (UTM)</CardTitle>
            <ArrowLeftRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalConversions.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Plataforma Top</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold capitalize">
              {Object.entries(metrics.clicksByPlatform)
                .sort(([, a], [, b]) => b - a)[0]?.[0] || '-'}
            </div>
            <div className="text-sm text-gray-500">
              {Object.entries(metrics.clicksByPlatform)
                .sort(([, a], [, b]) => b - a)[0]?.[1].toLocaleString() || '0'} cliques
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Últimos 7 dias</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.clicksByDay.reduce((sum, day) => sum + day.clicks, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clicks by Platform (Pie) */}
        <Card>
          <CardHeader>
            <CardTitle>Cliques por Plataforma</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Clicks by Type (Bar) */}
        <Card>
          <CardHeader>
            <CardTitle>Cliques por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={typeChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6">
                    {typeChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Clicks Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Cliques nos Últimos 7 Dias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="clicks" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Clicks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MousePointerClick className="h-5 w-5 text-blue-500" />
              Cliques Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plataforma</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {metrics.recentClicks.slice(0, 10).map((click) => (
                    <TableRow key={click.id}>
                      <TableCell>
                        <Badge 
                          style={{ backgroundColor: PLATFORM_COLORS[click.platform] || PLATFORM_COLORS.unknown }}
                          className="text-white"
                        >
                          {click.platform}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs capitalize">
                        {click.click_type.replace('_', ' ')}
                      </TableCell>
                      <TableCell className="max-w-[150px] truncate text-xs">
                        {click.item_name || '-'}
                      </TableCell>
                      <TableCell className="text-xs">{formatDate(click.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Conversions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5 text-green-500" />
              Conversões Recentes (UTM)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {metrics.recentConversions.slice(0, 10).map((conversion) => (
                    <TableRow key={conversion.id}>
                      <TableCell>
                        <Badge variant="outline">
                          {conversion.utm_source || '-'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs">
                        {conversion.utm_campaign || '-'}
                      </TableCell>
                      <TableCell className="text-xs">{formatDate(conversion.created_at)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Detalhamento por Plataforma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(metrics.clicksByPlatform)
              .sort(([, a], [, b]) => b - a)
              .map(([platform, clicks]) => (
                <div 
                  key={platform}
                  className="p-4 rounded-lg text-white text-center"
                  style={{ backgroundColor: PLATFORM_COLORS[platform] || PLATFORM_COLORS.unknown }}
                >
                  <div className="text-2xl font-bold">{clicks.toLocaleString()}</div>
                  <div className="text-sm opacity-90 capitalize">{platform}</div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AffiliateMetricsSection;
