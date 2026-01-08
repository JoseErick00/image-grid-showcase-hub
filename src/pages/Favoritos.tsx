import { useMemo } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import { useGamification } from '@/contexts/GamificationContext';
import { useBrasilRoute } from '@/hooks/useCurrentDomain';
import { useGridLayout } from '@/hooks/useGridLayout';
import { CATEGORY_COLORS } from '@/contexts/HintBalloonContext';
import CampaignProductCard from '@/components/campaigns/CampaignProductCard';
import UserProgressCard from '@/components/gamification/UserProgressCard';
import PlatformRegister from '@/components/campaigns/PlatformRegister';
import TrustBadges from '@/components/TrustBadges';
import { type Platform } from '@/utils/platformLogos';

const CATEGORIES = [
  { id: 'casa', label: 'Casa', color: CATEGORY_COLORS.casa },
  { id: 'esportes', label: 'Esportes', color: CATEGORY_COLORS.esportes },
  { id: 'saude', label: 'Saúde', color: CATEGORY_COLORS.saude },
  { id: 'incriveis', label: 'Incríveis', color: CATEGORY_COLORS.incriveis },
  { id: 'tech', label: 'Tech', color: CATEGORY_COLORS.tech },
  { id: 'kids', label: 'Kids', color: CATEGORY_COLORS.kids },
];

export default function Favoritos() {
  const routes = useBrasilRoute();
  const { isAuthenticated, loading } = useGamification();
  const { data: favorites = [], isLoading: loadingFavorites } = useFavorites();
  const { isCompactMode } = useGridLayout();

  // Group favorites by category
  const favoritesByCategory = useMemo(() => {
    const grouped: Record<string, typeof favorites> = {};
    
    CATEGORIES.forEach((cat) => {
      grouped[cat.id] = favorites.filter(
        (fav) => fav.product_data?.category === cat.id
      );
    });
    
    return grouped;
  }, [favorites]);

  // Categories that have favorites
  const categoriesWithFavorites = CATEGORIES.filter(
    (cat) => favoritesByCategory[cat.id]?.length > 0
  );

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Meus Favoritos | iNeed</title>
        <meta name="description" content="Veja os produtos que você curtiu e salve para comprar depois." />
      </Helmet>

      <main className="min-h-screen bg-background pb-16">
        {/* User Progress Section (replaces hero banner) */}
        <section className="bg-[#171717] pt-6 pb-8 px-4">
          <div className="max-w-[600px] mx-auto">
            <UserProgressCard />
          </div>
        </section>

        {/* Page Title */}
        <section className="py-8 px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <h1 className="text-3xl md:text-4xl font-omne-bold text-foreground">
              Meus Favoritos
            </h1>
          </div>
          <p className="text-muted-foreground font-omne-regular">
            {isAuthenticated 
              ? `Você tem ${favorites.length} produto${favorites.length !== 1 ? 's' : ''} salvo${favorites.length !== 1 ? 's' : ''}`
              : 'Faça login para ver seus produtos favoritos'}
          </p>
        </section>

        {/* Navigation Buttons by Category */}
        {categoriesWithFavorites.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center items-center mb-12 px-4">
            {categoriesWithFavorites.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="lg"
                onClick={() => scrollToSection(`favoritos-${category.id}`)}
                className="min-w-[120px] border-2"
                style={{ 
                  borderColor: category.color,
                  color: category.color,
                }}
              >
                {category.label} ({favoritesByCategory[category.id].length})
              </Button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {isAuthenticated && favorites.length === 0 && !loadingFavorites && (
          <div className="text-center py-16 px-4">
            <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-omne-semibold text-foreground mb-2">
              Nenhum favorito ainda
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Clique no ❤️ dos produtos nas páginas de campanhas para salvá-los aqui.
            </p>
            <Button asChild>
              <Link to={routes.home}>Explorar Produtos</Link>
            </Button>
          </div>
        )}

        {/* Favorites by Category */}
        {categoriesWithFavorites.map((category) => (
          <section 
            key={category.id} 
            id={`favoritos-${category.id}`}
            className="mb-16 scroll-mt-20 px-4"
          >
            <div className="max-w-[1200px] mx-auto">
              <div 
                className="flex items-center gap-3 mb-6 pb-2 border-b-2"
                style={{ borderColor: category.color }}
              >
                <h2 
                  className="text-2xl font-omne-bold"
                  style={{ color: category.color }}
                >
                  {category.label}
                </h2>
                <span className="text-muted-foreground text-sm">
                  ({favoritesByCategory[category.id].length} produto{favoritesByCategory[category.id].length !== 1 ? 's' : ''})
                </span>
              </div>

              <div className={`grid gap-6 ${
                isCompactMode 
                  ? 'grid-cols-2 md:grid-cols-3' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {favoritesByCategory[category.id].map((favorite, index) => (
                  <CampaignProductCard
                    key={favorite.id}
                    image={favorite.product_data.image}
                    label={favorite.product_data.label}
                    link={favorite.product_data.link}
                    platform={favorite.product_data.platform as Platform}
                    position={index + 1}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Platform Register */}
        <section className="py-8">
          <PlatformRegister />
        </section>

        {/* Trust Badges */}
        <section className="py-8">
          <TrustBadges />
        </section>

        {/* Back Button */}
        <div className="flex justify-center py-8">
          <Button
            variant="outline"
            className="border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
            asChild
          >
            <Link to={routes.home}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a página principal
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
