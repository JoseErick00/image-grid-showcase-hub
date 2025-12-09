import { useParams } from 'react-router-dom';
import { useCampaignWithData, transformToCampaignConfig } from '@/hooks/useCampaignData';
import CampaignTemplate from '@/components/campaigns/CampaignTemplate';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicCampaignPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data, isLoading, error } = useCampaignWithData(slug || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7]">
        <Skeleton className="w-full h-[300px] md:h-[400px]" />
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
          <div className="flex justify-center gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
          <Skeleton className="w-full h-[200px] rounded-lg mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[280px] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-omne-medium mb-4">Campanha não encontrada</h1>
          <p className="text-muted-foreground">A campanha que você está procurando não existe ou foi desativada.</p>
        </div>
      </div>
    );
  }

  const config = transformToCampaignConfig(data);

  return <CampaignTemplate config={config} />;
};

export default DynamicCampaignPage;
