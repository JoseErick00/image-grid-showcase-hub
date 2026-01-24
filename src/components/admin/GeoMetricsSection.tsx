import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MapPin, Globe, Building, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import BrazilMap from "./BrazilMap";

interface GeoMetrics {
  totalWithGeo: number;
  totalWithoutGeo: number;
  clicksByCountry: Record<string, number>;
  clicksByRegion: Record<string, number>;
  clicksByCity: Array<{ city: string; region: string; country: string; count: number }>;
  brazilStates: Record<string, number>;
}

interface GeoMetricsSectionProps {
  metrics: GeoMetrics | null;
  loading?: boolean;
}

const COUNTRY_COLORS: Record<string, string> = {
  Brazil: "#22c55e",
  "United States": "#3b82f6",
  Portugal: "#ef4444",
  Argentina: "#06b6d4",
  Germany: "#f59e0b",
  Spain: "#8b5cf6",
  France: "#ec4899",
  Other: "#6b7280",
};

const GeoMetricsSection: React.FC<GeoMetricsSectionProps> = ({ metrics, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-8">
        Carregando métricas geográficas...
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="text-center py-8 text-gray-500">
        <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>Nenhum dado geográfico disponível ainda.</p>
        <p className="text-sm mt-2">
          Os dados geográficos serão coletados a partir de agora para novos cliques.
        </p>
      </div>
    );
  }

  const { totalWithGeo, totalWithoutGeo, clicksByCountry, clicksByRegion, clicksByCity, brazilStates } = metrics;

  // Prepare country chart data
  const countryData = Object.entries(clicksByCountry)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([country, count]) => ({
      name: country,
      value: count,
      fill: COUNTRY_COLORS[country] || COUNTRY_COLORS.Other,
    }));

  // Prepare region chart data (for Brazil)
  const regionData = Object.entries(clicksByRegion)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([region, count]) => ({
      name: region,
      cliques: count,
    }));

  const chartConfig = {
    cliques: {
      label: "Cliques",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Com Geolocalização</CardTitle>
            <MapPin className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWithGeo}</div>
            <p className="text-xs text-gray-500 mt-1">
              {totalWithGeo + totalWithoutGeo > 0 
                ? `${Math.round((totalWithGeo / (totalWithGeo + totalWithoutGeo)) * 100)}% do total`
                : "0%"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Países</CardTitle>
            <Globe className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(clicksByCountry).length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Regiões (BR)</CardTitle>
            <Building className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(clicksByRegion).length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Top País</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">
              {countryData[0]?.name || "N/A"}
            </div>
            <p className="text-xs text-gray-500">
              {countryData[0]?.value || 0} cliques
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Country Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Cliques por País
            </CardTitle>
          </CardHeader>
          <CardContent>
            {countryData.length > 0 ? (
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={countryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      labelLine={false}
                    >
                      {countryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                Sem dados de países
              </div>
            )}
          </CardContent>
        </Card>

        {/* Brazil Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mapa de Calor - Brasil
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(brazilStates).length > 0 ? (
              <BrazilMap data={brazilStates} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                Sem dados de estados brasileiros
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Region Bar Chart */}
      {regionData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Top 10 Estados/Regiões
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={regionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={80} fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="cliques" fill="hsl(var(--primary))" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}

      {/* Top Cities Table */}
      {clicksByCity.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Top 20 Cidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Cidade</TableHead>
                    <TableHead>Estado/Região</TableHead>
                    <TableHead>País</TableHead>
                    <TableHead className="text-right">Cliques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clicksByCity.slice(0, 20).map((item, index) => (
                    <TableRow key={`${item.city}-${item.region}-${index}`}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{item.city || "Desconhecida"}</TableCell>
                      <TableCell>{item.region || "N/A"}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {item.country || "N/A"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">{item.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Coverage Notice */}
      {totalWithoutGeo > 0 && (
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="py-4">
            <p className="text-sm text-yellow-800">
              <strong>Nota:</strong> {totalWithoutGeo} cliques não possuem dados geográficos 
              (registrados antes da implementação do rastreamento ou IPs privados/localhost).
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GeoMetricsSection;
