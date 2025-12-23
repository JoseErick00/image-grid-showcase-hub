import { Link, useNavigate } from "react-router-dom";
import { useGamification } from "@/contexts/GamificationContext";
import { Users, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
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
  const { isAuthenticated, user, gamification, loading, signOut, processReferral, refreshGamification } = useGamification();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referrerCode, setReferrerCode] = useState<string | null>(null);

  // Fetch referrer's code if user was referred
  useEffect(() => {
    const fetchReferrerCode = async () => {
      if (gamification?.referred_by) {
        const { data } = await supabase
          .from("user_gamification")
          .select("referral_code")
          .eq("id", gamification.referred_by)
          .maybeSingle();
        
        if (data?.referral_code) {
          setReferrerCode(data.referral_code);
        }
      }
    };
    
    fetchReferrerCode();
  }, [gamification?.referred_by]);

  const handleLogout = async () => {
    await signOut();
    onCloseMenu?.();
    navigate('/auth');
  };

  const handleLoginClick = () => {
    onCloseMenu?.();
  };

  const handleConnectReferral = async () => {
    if (!referralCode.trim()) return;
    
    setIsSubmitting(true);
    try {
      const success = await processReferral(referralCode.trim().toUpperCase());
      if (success) {
        setReferralCode("");
        await refreshGamification();
      }
    } finally {
      setIsSubmitting(false);
    }
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
  const hasReferrer = !!gamification?.referred_by;

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

        {/* Referrer info or connect code */}
        {hasReferrer ? (
          referrerCode && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Você foi indicado por: +{referrerCode}
            </p>
          )
        ) : (
          <div className="mt-3 flex gap-2">
            <Input
              placeholder="Código do Amigo"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              className="h-8 text-xs flex-1"
              maxLength={10}
            />
            <Button
              size="sm"
              onClick={handleConnectReferral}
              disabled={isSubmitting || !referralCode.trim()}
              className="h-8 px-3"
            >
              <UserPlus size={14} />
            </Button>
          </div>
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

      {/* Referrer info or connect code */}
      {hasReferrer ? (
        referrerCode && (
          <p className="text-xs text-white/70 mt-1 text-center">
            Você foi indicado por: +{referrerCode}
          </p>
        )
      ) : (
        <div className="mt-1 flex gap-1 w-full">
          <Input
            placeholder="Código do Amigo"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
            className="h-7 text-xs flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            maxLength={10}
          />
          <Button
            size="sm"
            onClick={handleConnectReferral}
            disabled={isSubmitting || !referralCode.trim()}
            className="h-7 px-2 bg-white/20 hover:bg-white/30 text-white"
          >
            <UserPlus size={12} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeaderUserSection;
