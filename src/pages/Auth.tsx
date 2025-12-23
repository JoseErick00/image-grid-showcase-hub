import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Users } from "lucide-react";
import SEO from "@/components/SEO";
import { z } from "zod";
import loginStars from "@/assets/login-stars.png";

const emailSchema = z.string().email("Email inválido");
const referralCodeSchema = z.string().max(8, "Código deve ter no máximo 8 caracteres").optional();

export default function Auth() {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; referralCode?: string }>({});
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const redirectTo = searchParams.get("redirect") || "/brasil/premios";
        navigate(redirectTo);
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        const redirectTo = searchParams.get("redirect") || "/brasil/premios";
        navigate(redirectTo);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, searchParams]);

  // Get referral code from URL if present
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      setReferralCode(ref.toUpperCase());
    }
  }, [searchParams]);

  const validateForm = (): boolean => {
    const newErrors: { email?: string; referralCode?: string } = {};
    
    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }

    if (referralCode) {
      try {
        referralCodeSchema.parse(referralCode);
      } catch (e) {
        if (e instanceof z.ZodError) {
          newErrors.referralCode = e.errors[0].message;
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/brasil/premios`;
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            referral_code_used: referralCode || null,
          }
        }
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: error.message,
        });
      } else {
        // Store referral code for processing after login
        if (referralCode) {
          localStorage.setItem('pending_referral_code', referralCode);
        }
        
        setEmailSent(true);
        toast({
          title: "Email enviado!",
          description: "Verifique sua caixa de entrada para acessar.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/brasil/premios`;
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        }
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: error.message,
        });
      } else {
        toast({
          title: "Email reenviado!",
          description: "Verifique sua caixa de entrada.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Email sent confirmation screen
  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center px-4 py-12">
        <SEO
          title="Verifique seu email | iNeed Premiação"
          description="Um link de acesso foi enviado para seu email."
        />
        
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-8 text-center">
            <img src={loginStars} alt="Estrelas" className="w-72 h-auto mb-4 mx-auto" />
            
            <h1 className="text-2xl font-omne-semibold text-foreground mb-2">
              Verifique seu email
            </h1>
            
            <p className="text-muted-foreground font-omne-regular mb-6">
              Enviamos um link de acesso para:
              <br />
              <strong className="text-foreground">{email}</strong>
            </p>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium"
                onClick={handleResendEmail}
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Reenviar email
              </Button>
              
              <button
                type="button"
                onClick={() => {
                  setEmailSent(false);
                  setEmail("");
                }}
                className="text-sm text-muted-foreground hover:text-foreground font-omne-regular"
              >
                Usar outro email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center px-4 py-12">
      <SEO
        title="Entrar | iNeed Premiação"
        description="Entre para participar do programa de premiação iNeed."
      />
      
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <img src={loginStars} alt="Estrelas" className="w-72 h-auto mb-4 mx-auto" />
            <h1 className="text-2xl font-omne-semibold text-foreground">
              Participe e ganhe prêmios!
            </h1>
            <p className="text-muted-foreground mt-2 font-omne-regular">
              Insira seu email para começar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-omne-regular">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className={errors.email ? "border-destructive" : ""}
                required
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="referralCode" className="font-omne-regular flex items-center gap-2">
                <Users size={16} className="text-muted-foreground" />
                Código do Amigo
                <span className="text-muted-foreground text-xs">(opcional)</span>
              </Label>
              <Input
                id="referralCode"
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                placeholder="XXXXXXXX"
                maxLength={8}
                className={`uppercase ${errors.referralCode ? "border-destructive" : ""}`}
              />
              {errors.referralCode && (
                <p className="text-sm text-destructive">{errors.referralCode}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Seu amigo ganha moedas quando você entra com o código dele!
              </p>
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Continuar
            </Button>
          </form>

          {/* Info */}
          <p className="text-center text-xs text-muted-foreground mt-6 font-omne-regular">
            Você receberá um link de acesso no seu email.
            <br />
            Sem necessidade de senha!
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6 font-omne-regular">
          Ao continuar, você concorda com nossos termos de uso e política de privacidade.
        </p>
      </div>
    </div>
  );
}