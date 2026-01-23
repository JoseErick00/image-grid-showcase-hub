import { Link, useNavigate } from "react-router-dom";
import { useGamification } from "@/contexts/GamificationContext";
import { Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationToggle } from "@/components/NotificationToggle";
import premiacaoCoinIcon from '@/assets/premiacao-coin.png';
import { useBrasilRoute } from "@/hooks/useCurrentDomain";
import { useFavoritesCount } from "@/hooks/useFavorites";
import HintBalloon from "./HintBalloon";
import { useHintBalloon } from "@/contexts/HintBalloonContext";

// Level icons
import colegasIcon from '@/assets/levels/colegas.png';
import amigosIcon from '@/assets/levels/amigos.png';
import familiaIcon from '@/assets/levels/familia.png';
import sociosIcon from '@/assets/levels/socios.png';

const LEVEL_ICONS: Record<string, string> = {
  colegas: colegasIcon,
  amigos: amigosIcon,
  familia: familiaIcon,
  socios: sociosIcon,
};

const LEVEL_LABELS: Record<string, string> = {
  colegas: "Colegas",
  amigos: "Amigos",
  familia: "Família",
  socios: "Sócios",
};

interface HeaderUserSectionProps {
  variant?: 'desktop' | 'mobile';
  onCloseMenu?: () => void;
}

const HeaderUserSection = ({ variant = 'desktop', onCloseMenu }: HeaderUserSectionProps) => {
  const { isAuthenticated, user, gamification, loading, signOut } = useGamification();
  const navigate = useNavigate();
  const routes = useBrasilRoute();
  const favoritesCount = useFavoritesCount();
  const { pageHints, dismissHint, isHintDismissed } = useHintBalloon();

  const showFavoritesHint = pageHints.favorites && !isHintDismissed('favorites');

  const handleLogout = async () => {
    await signOut();
    onCloseMenu?.();
    navigate(routes.auth);
  };

  const handleLoginClick = () => {
    onCloseMenu?.();
  };

  if (loading) {
    return (
      <div className={`${variant === 'desktop' ? 'flex items-center' : 'p-3'}`}>
        <div className="animate-pulse bg-muted rounded h-8 w-24"></div>
      </div>
    );
  }

  // Not authenticated - show login CTA
  if (!isAuthenticated || !user) {
    return (
      <div className={`${variant === 'desktop' 
        ? 'flex flex-col items-center gap-1 rounded-lg px-4 py-2 border' 
        : 'flex flex-col items-center gap-3 p-4'}`}
        style={variant === 'desktop' ? { backgroundColor: '#434343', borderColor: '#767676' } : undefined}
      >
        <p className={`${variant === 'desktop' ? 'text-xs text-white' : 'text-sm text-muted-foreground text-center'}`}>
          Entre para ganhar nossos produtos.
        </p>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#434343] font-omne-medium"
          asChild
        >
          <Link to={routes.auth} onClick={handleLoginClick}>
            Comece a ganhar!
          </Link>
        </Button>
      </div>
    );
  }

  // Authenticated - show user info
  const currentLevel = gamification?.current_level || 'colegas';
  const totalCoins = gamification?.current_level_coins || 0;
  const totalReferrals = gamification?.current_level_referrals || 0;
  const userEmail = user.email || '';
  const referralCode = gamification?.referral_code || '';

  if (variant === 'mobile') {
    return (
      <div className="flex items-start gap-3 p-4 bg-muted/20">
        {/* Left side icons */}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <Link 
              to="/favoritos" 
              onClick={() => {
                if (showFavoritesHint) dismissHint('favorites');
                onCloseMenu?.();
              }}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-border hover:bg-muted transition-colors"
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} />
            </Link>
            {showFavoritesHint && (
              <HintBalloon
                message={pageHints.favorites!}
                position="right"
                onDismiss={() => dismissHint('favorites')}
                delay={2500}
                borderColor={pageHints.borderColor}
              />
            )}
          </div>
          <div className="flex items-center justify-center w-10 h-10">
            <NotificationToggle variant="compact" />
          </div>
        </div>

        {/* User info box */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* Email + trocar */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-muted-foreground truncate max-w-[180px]">
              {userEmail}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs text-brand-light hover:underline"
            >
              trocar
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-4">
            {/* Coins */}
            <div className="flex items-center gap-1">
              <img src={premiacaoCoinIcon} alt="moedas" className="w-4 h-4" />
              <span className="text-sm font-omne-medium text-foreground">{totalCoins}</span>
            </div>

            {/* Referrals */}
            <div className="flex items-center gap-1">
              <Users size={14} className="text-muted-foreground" />
              <span className="text-sm text-foreground">{totalReferrals}</span>
            </div>

            {/* Level */}
            <div className="flex items-center gap-1">
              <img 
                src={LEVEL_ICONS[currentLevel]} 
                alt={LEVEL_LABELS[currentLevel]} 
                className="w-5 h-5"
              />
              <span className="text-sm font-omne-medium text-foreground">
                {LEVEL_LABELS[currentLevel]}
              </span>
            </div>
          </div>

          {/* User's referral code */}
          {referralCode && (
            <p className="text-sm font-omne-semibold text-foreground mt-3 text-center">
              Código: {referralCode}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="flex items-center gap-3 bg-[#434343] rounded-lg px-4 py-2 border border-[#767676]">
      {/* Left side icons - same as mobile */}
      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <Link 
            to="/favoritos"
            onClick={() => showFavoritesHint && dismissHint('favorites')}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Meus Favoritos"
          >
            <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : 'text-white'}`} />
          </Link>
          {showFavoritesHint && (
            <HintBalloon
              message={pageHints.favorites!}
              position="left"
              onDismiss={() => dismissHint('favorites')}
              delay={2500}
              borderColor={pageHints.borderColor}
            />
          )}
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
          <NotificationToggle variant="compact" className="text-white" />
        </div>
      </div>
      
      {/* User info */}
      <div className="flex flex-col items-center gap-0.5">
        {/* Email + trocar */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-white/80 truncate max-w-[150px]">
            {userEmail}
          </span>
          <button
            onClick={handleLogout}
            className="text-xs text-white/60 hover:text-white hover:underline"
          >
            trocar
          </button>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-3">
          {/* Coins */}
          <div className="flex items-center gap-1">
            <img src={premiacaoCoinIcon} alt="moedas" className="w-4 h-4" />
            <span className="text-sm font-omne-medium text-white">{totalCoins}</span>
          </div>

          {/* Referrals */}
          <div className="flex items-center gap-1">
            <Users size={14} className="text-white/70" />
            <span className="text-sm text-white">{totalReferrals}</span>
          </div>

          {/* Level */}
          <div className="flex items-center gap-1">
            <img 
              src={LEVEL_ICONS[currentLevel]} 
              alt={LEVEL_LABELS[currentLevel]} 
              className="w-4 h-4"
            />
            <span className="text-xs font-omne-medium text-white">
              {LEVEL_LABELS[currentLevel]}
            </span>
          </div>
        </div>

        {/* User's referral code - highlighted */}
        {referralCode && (
          <p className="text-base font-omne-bold text-white mt-1">
            {referralCode}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderUserSection;
