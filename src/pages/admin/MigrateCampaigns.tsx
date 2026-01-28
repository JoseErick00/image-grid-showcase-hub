import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle, XCircle, Database, ArrowRight } from 'lucide-react';
import AdminGuard from '@/components/admin/AdminGuard';

// Importar dados das campanhas
import { selCuidadoRostoData } from '@/pages/campaigns/data/selCuidadoRostoData';
import { selCorpoData } from '@/pages/campaigns/data/selCorpoData';
import { selCremesGringosData } from '@/pages/campaigns/data/selCremesGringosData';
import { selAcampamentosData } from '@/pages/campaigns/data/selAcampamentosData';
import { selPraiaData } from '@/pages/campaigns/data/selPraiaData';
import { selIncriveis01Data } from '@/pages/campaigns/data/selIncriveis01Data';
import { selIncriveis02Data } from '@/pages/campaigns/data/selIncriveis02Data';
import { selIncriveis03Data } from '@/pages/campaigns/data/selIncriveis03Data';
import { selIncriveis04Data } from '@/pages/campaigns/data/selIncriveis04Data';
import { selCalcadosFemininosData } from '@/pages/campaigns/data/selCalcadosFemininosData';
import { selCalcadosMasculinosData } from '@/pages/campaigns/data/selCalcadosMasculinosData';
import { selCozinhaData } from '@/pages/campaigns/data/selCozinhaData';
import { selSalaData } from '@/pages/campaigns/data/selSalaData';
import { selQuartoData } from '@/pages/campaigns/data/selQuartoData';
import { selBanheiroData } from '@/pages/campaigns/data/selBanheiroData';
import { selAcademiaData } from '@/pages/campaigns/data/selAcademiaData';
import { selCorredoresData } from '@/pages/campaigns/data/selCorredoresData';
import { selAquaticosData } from '@/pages/campaigns/data/selAquaticosData';
import { selTimeCampoData } from '@/pages/campaigns/data/selTimeCampoData';

const allCampaigns = [
  { data: selCuidadoRostoData, category: 'Saúde' },
  { data: selCorpoData, category: 'Saúde' },
  { data: selCremesGringosData, category: 'Saúde' },
  { data: selAcampamentosData, category: 'Incríveis' },
  { data: selPraiaData, category: 'Incríveis' },
  { data: selIncriveis01Data, category: 'Incríveis' },
  { data: selIncriveis02Data, category: 'Incríveis' },
  { data: selIncriveis03Data, category: 'Incríveis' },
  { data: selIncriveis04Data, category: 'Incríveis' },
  { data: selCalcadosFemininosData, category: 'Incríveis' },
  { data: selCalcadosMasculinosData, category: 'Incríveis' },
  { data: selCozinhaData, category: 'Casa' },
  { data: selSalaData, category: 'Casa' },
  { data: selQuartoData, category: 'Casa' },
  { data: selBanheiroData, category: 'Casa' },
  { data: selAcademiaData, category: 'Esportes' },
  { data: selCorredoresData, category: 'Esportes' },
  { data: selAquaticosData, category: 'Esportes' },
  { data: selTimeCampoData, category: 'Esportes' },
];

interface MigrationStatus {
  slug: string;
  status: 'pending' | 'migrating' | 'success' | 'error';
  message?: string;
}

const MigrateCampaignsContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesCreated, setCategoriesCreated] = useState(false);
  const [migrationStatuses, setMigrationStatuses] = useState<MigrationStatus[]>(
    allCampaigns.map(c => ({ slug: c.data.campaignSlug, status: 'pending' }))
  );
  const [stats, setStats] = useState<{ categories: number; campaigns: number; products: number; banners: number } | null>(null);

  const initCategories = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('migrate-campaign-data', {
        body: { action: 'init-categories' }
      });

      if (error) throw error;
      if (!data.success) throw new Error(data.error);

      setCategoriesCreated(true);
      toast.success('Categorias criadas com sucesso!');
    } catch (error: any) {
      toast.error(`Erro: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const migrateCampaign = async (campaignData: any, index: number) => {
    setMigrationStatuses(prev => 
      prev.map((s, i) => i === index ? { ...s, status: 'migrating' } : s)
    );

    try {
      const { data, error } = await supabase.functions.invoke('migrate-campaign-data', {
        body: { action: 'migrate-campaign', campaignData }
      });

      if (error) throw error;
      if (!data.success) throw new Error(data.error);

      setMigrationStatuses(prev => 
        prev.map((s, i) => i === index ? { 
          ...s, 
          status: 'success', 
          message: `${data.productsCount} produtos, ${data.bannersCount} banners` 
        } : s)
      );
    } catch (error: any) {
      setMigrationStatuses(prev => 
        prev.map((s, i) => i === index ? { ...s, status: 'error', message: error.message } : s)
      );
    }
  };

  const migrateAll = async () => {
    if (!categoriesCreated) {
      toast.error('Primeiro crie as categorias!');
      return;
    }

    setIsLoading(true);
    
    for (let i = 0; i < allCampaigns.length; i++) {
      await migrateCampaign(allCampaigns[i].data, i);
      // Pequeno delay entre migrações
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    await fetchStats();
    setIsLoading(false);
    toast.success('Migração completa!');
  };

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('migrate-campaign-data', {
        body: { action: 'get-stats' }
      });

      if (error) throw error;
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'migrating': return <Loader2 className="h-5 w-5 animate-spin text-blue-500" />;
      default: return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6" />
              Migração de Dados para Supabase
            </CardTitle>
            <CardDescription>
              Migre os dados das campanhas dos arquivos TypeScript para o banco de dados Supabase.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Passo 1: Criar categorias */}
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium">Passo 1: Criar Categorias</h3>
                <p className="text-sm text-gray-500">Saúde, Incríveis, Casa, Esportes</p>
              </div>
              {categoriesCreated ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <Button onClick={initCategories} disabled={isLoading}>
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Criar Categorias
                </Button>
              )}
            </div>

            {/* Passo 2: Migrar campanhas */}
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium">Passo 2: Migrar Campanhas</h3>
                <p className="text-sm text-gray-500">{allCampaigns.length} campanhas com produtos e banners</p>
              </div>
              <Button 
                onClick={migrateAll} 
                disabled={isLoading || !categoriesCreated}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <ArrowRight className="h-4 w-4 mr-2" />}
                Migrar Todas
              </Button>
            </div>

            {/* Estatísticas */}
            {stats && (
              <div className="grid grid-cols-4 gap-4 p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.categories}</div>
                  <div className="text-sm text-gray-600">Categorias</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.campaigns}</div>
                  <div className="text-sm text-gray-600">Campanhas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.products}</div>
                  <div className="text-sm text-gray-600">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{stats.banners}</div>
                  <div className="text-sm text-gray-600">Banners</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Lista de campanhas */}
        <Card>
          <CardHeader>
            <CardTitle>Status das Campanhas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {migrationStatuses.map((status, index) => (
                <div 
                  key={status.slug} 
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  {getStatusIcon(status.status)}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{allCampaigns[index].data.pageTitle}</div>
                    <div className="text-xs text-gray-500">
                      {status.slug} • {allCampaigns[index].category}
                    </div>
                  </div>
                  {status.message && (
                    <span className={`text-xs ${status.status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                      {status.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MigrateCampaigns = () => {
  return (
    <AdminGuard>
      <MigrateCampaignsContent />
    </AdminGuard>
  );
};

export default MigrateCampaigns;