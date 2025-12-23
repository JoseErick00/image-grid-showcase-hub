import { Link, useNavigate } from "react-router-dom";
import { useGamification } from "@/contexts/GamificationContext";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import premiacaoCoinIcon from '@/assets/premiacao-coin.png';

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

  const handleLogout = async () => {
    await signOut();
    onCloseMenu?.();
    navigate('/auth');
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
        : 'border-t border-border p-4 mt-4'}`}
        style={variant === 'desktop' ? { backgroundColor: '#434343', borderColor: '#767676' } : undefined}
      >
        <p className={`${variant === 'desktop' ? 'text-xs text-white' : 'text-sm text-muted-foreground'}`}>
          Entre para ganhar nossos produtos.
        </p>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#434343] font-omne-medium"
          asChild
        >
          <Link to="/auth" onClick={handleLoginClick}>
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
      <div className="border-t border-border p-4 mt-4 bg-muted/20">
        {/* Email + trocar */}
        <div className="flex items-center justify-between mb-3">
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
        <div className="flex items-center justify-between gap-2">
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
          <p className="text-sm font-omne-semibold text-foreground mt-2 text-center">
            Código: {referralCode}
          </p>
        )}
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="flex flex-col items-center gap-0.5 bg-[#434343] rounded-lg px-4 py-2 border border-[#767676]">
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
  );
};

export default HeaderUserSection;
