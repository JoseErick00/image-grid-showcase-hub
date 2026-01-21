import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Coins, Share2, Heart, Gift, TrendingUp, Clock, UserPlus, MousePointerClick } from "lucide-react";
import AffiliateMetricsSection from "@/components/admin/AffiliateMetricsSection";

interface MetricsData {
  summary: {
    totalUsers: number;
    usersByLevel: {
      colegas: number;
      amigos: number;
      familia: number;
      socios: number;
    };
    totalCoinsEarned: number;
    totalReferrals: number;
    totalProductShares: number;
    totalAppShares: number;
    totalFavorites: number;
    totalRedemptions: number;
  };
  platformClicks: Record<string, number>;
  topSharedProducts: Array<{ count: number; product_id: string }>;
  topFavoriteProducts: Array<{ count: number; product_id: string; product_data: any }>;
  topUsers: Array<{
    user_id: string;
    current_level: string;
    total_coins_earned: number;
    total_referrals_ever: number;
    prizes_redeemed_count: number;
    created_at: string;
    referral_code: string;
  }>;
  oldestUsers: Array<{
    user_id: string;
    current_level: string;
    total_coins_earned: number;
    total_referrals_ever: number;
    created_at: string;
    referral_code: string;
  }>;
  recentTransactions: Array<{
    id: string;
    user_id: string;
    transaction_type: string;
    amount: number;
    product_id: string | null;
    created_at: string;
  }>;
  recentReferrals: Array<{
    id: string;
    referrer_id: string;
    referred_id: string;
    referral_code: string;
    coins_awarded: number;
    created_at: string;
  }>;
  recentRedemptions: Array<{
    id: string;
    user_id: string;
    prize_level: string;
    product_name: string | null;
    status: string;
    created_at: string;
  }>;
}

const AdminMetrics = () => {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [affiliateMetrics, setAffiliateMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [affiliateLoading, setAffiliateLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetrics();
    fetchAffiliateMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke("admin-metrics");
      
      if (error) throw error;
      if (!data.success) throw new Error(data.error);
      
      setMetrics(data.data);
    } catch (err: any) {
      console.error("Error fetching metrics:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAffiliateMetrics = async () => {
    try {
      setAffiliateLoading(true);
      const { data, error } = await supabase.functions.invoke("affiliate-metrics");
      
      if (error) throw error;
      if (!data.success) throw new Error(data.error);
      
      setAffiliateMetrics(data.data);
    } catch (err: any) {
      console.error("Error fetching affiliate metrics:", err);
    } finally {
      setAffiliateLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "colegas": return "bg-gray-500";
      case "amigos": return "bg-blue-500";
      case "familia": return "bg-purple-500";
      case "socios": return "bg-yellow-500";
      default: return "bg-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl">Carregando métricas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl text-red-600">Erro: {error}</div>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Métricas do Projeto</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Usuários</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Moedas Totais</CardTitle>
              <Coins className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalCoinsEarned.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Indicações</CardTitle>
              <UserPlus className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalReferrals}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Resgates</CardTitle>
              <Gift className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalRedemptions}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Compartilhamentos (Produtos)</CardTitle>
              <Share2 className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalProductShares}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Compartilhamentos (App)</CardTitle>
              <Share2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalAppShares}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Favoritos</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metrics.summary.totalFavorites}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Plataformas</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                {Object.entries(metrics.platformClicks)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 3)
                  .map(([platform, clicks]) => (
                    <div key={platform} className="flex justify-between">
                      <span className="capitalize">{platform}</span>
                      <span className="font-semibold">{clicks}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users by Level */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usuários por Nível</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-500">Colegas</Badge>
                <span className="font-bold">{metrics.summary.usersByLevel.colegas}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500">Amigos</Badge>
                <span className="font-bold">{metrics.summary.usersByLevel.amigos}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-500">Família</Badge>
                <span className="font-bold">{metrics.summary.usersByLevel.familia}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-500">Sócios</Badge>
                <span className="font-bold">{metrics.summary.usersByLevel.socios}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="affiliates" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
            <TabsTrigger value="affiliates" className="flex items-center gap-1">
              <MousePointerClick className="h-3 w-3" />
              Afiliados
            </TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="shares">Compartilhamentos</TabsTrigger>
            <TabsTrigger value="referrals">Indicações</TabsTrigger>
            <TabsTrigger value="redemptions">Resgates</TabsTrigger>
          </TabsList>

          <TabsContent value="affiliates">
            {affiliateLoading ? (
              <div className="text-center py-8">Carregando métricas de afiliados...</div>
            ) : affiliateMetrics ? (
              <AffiliateMetricsSection metrics={affiliateMetrics} />
            ) : (
              <div className="text-center py-8 text-gray-500">
                Nenhum dado de afiliados disponível ainda.
              </div>
            )}
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Usuários Mais Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Código</TableHead>
                        <TableHead>Nível</TableHead>
                        <TableHead>Moedas</TableHead>
                        <TableHead>Indicações</TableHead>
                        <TableHead>Resgates</TableHead>
                        <TableHead>Cadastro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.topUsers.map((user) => (
                        <TableRow key={user.user_id}>
                          <TableCell className="font-mono text-xs">{user.user_id.slice(0, 8)}...</TableCell>
                          <TableCell className="font-mono">{user.referral_code}</TableCell>
                          <TableCell>
                            <Badge className={getLevelColor(user.current_level)}>
                              {user.current_level}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.total_coins_earned}</TableCell>
                          <TableCell>{user.total_referrals_ever}</TableCell>
                          <TableCell>{user.prizes_redeemed_count}</TableCell>
                          <TableCell>{formatDate(user.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Usuários Mais Antigos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Código</TableHead>
                        <TableHead>Nível</TableHead>
                        <TableHead>Moedas</TableHead>
                        <TableHead>Indicações</TableHead>
                        <TableHead>Cadastro</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.oldestUsers.map((user) => (
                        <TableRow key={user.user_id}>
                          <TableCell className="font-mono text-xs">{user.user_id.slice(0, 8)}...</TableCell>
                          <TableCell className="font-mono">{user.referral_code}</TableCell>
                          <TableCell>
                            <Badge className={getLevelColor(user.current_level)}>
                              {user.current_level}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.total_coins_earned}</TableCell>
                          <TableCell>{user.total_referrals_ever}</TableCell>
                          <TableCell>{formatDate(user.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Produtos Mais Favoritados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead>Plataforma</TableHead>
                        <TableHead>Favoritos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.topFavoriteProducts.map((product, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="max-w-xs truncate">
                            {product.product_data?.label || product.product_id}
                          </TableCell>
                          <TableCell className="capitalize">
                            {product.product_data?.platform || "-"}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{product.count}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shares">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-blue-500" />
                  Transações Recentes de Compartilhamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Moedas</TableHead>
                        <TableHead>Produto ID</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.recentTransactions
                        .filter(t => t.transaction_type === 'share' || t.transaction_type === 'app_share')
                        .map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-mono text-xs">
                              {transaction.user_id.slice(0, 8)}...
                            </TableCell>
                            <TableCell>
                              <Badge variant={transaction.transaction_type === 'share' ? 'default' : 'secondary'}>
                                {transaction.transaction_type === 'share' ? 'Produto' : 'App'}
                              </Badge>
                            </TableCell>
                            <TableCell>+{transaction.amount}</TableCell>
                            <TableCell className="font-mono text-xs">
                              {transaction.product_id?.slice(0, 15) || "-"}
                            </TableCell>
                            <TableCell>{formatDate(transaction.created_at)}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Produtos Mais Compartilhados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto ID</TableHead>
                        <TableHead>Compartilhamentos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.topSharedProducts.map((product, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-mono text-xs">{product.product_id}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{product.count}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-green-500" />
                  Indicações Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Quem Indicou</TableHead>
                        <TableHead>Indicado</TableHead>
                        <TableHead>Código</TableHead>
                        <TableHead>Moedas</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.recentReferrals.map((referral) => (
                        <TableRow key={referral.id}>
                          <TableCell className="font-mono text-xs">
                            {referral.referrer_id.slice(0, 8)}...
                          </TableCell>
                          <TableCell className="font-mono text-xs">
                            {referral.referred_id.slice(0, 8)}...
                          </TableCell>
                          <TableCell className="font-mono">{referral.referral_code}</TableCell>
                          <TableCell>+{referral.coins_awarded}</TableCell>
                          <TableCell>{formatDate(referral.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="redemptions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-purple-500" />
                  Resgates Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Nível</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {metrics.recentRedemptions.map((redemption) => (
                        <TableRow key={redemption.id}>
                          <TableCell className="font-mono text-xs">
                            {redemption.user_id.slice(0, 8)}...
                          </TableCell>
                          <TableCell>
                            <Badge className={getLevelColor(redemption.prize_level)}>
                              {redemption.prize_level}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {redemption.product_name || "-"}
                          </TableCell>
                          <TableCell>
                            <Badge variant={redemption.status === 'pending' ? 'outline' : 'default'}>
                              {redemption.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{formatDate(redemption.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminMetrics;
