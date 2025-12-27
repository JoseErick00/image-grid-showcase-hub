import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Users, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import { z } from "zod";
import loginStars from "@/assets/login-stars.png";
import { getAuthRedirectUrl, isBrasilDomain } from "@/hooks/useCurrentDomain";

const emailSchema = z.string().email("Email inválido");
const referralCodeSchema = z.string().max(8, "Código deve ter no máximo 8 caracteres").optional();

export default function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; referralCode?: string }>({});
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // Get the correct redirect route based on domain
  const getRedirectRoute = () => {
    const onBrasilDomain = isBrasilDomain();
    return onBrasilDomain ? '/premios' : '/brasil/premios';
  };

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const redirectTo = searchParams.get("redirect") || getRedirectRoute();
        navigate(redirectTo);
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        const redirectTo = searchParams.get("redirect") || getRedirectRoute();
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
      setActiveTab("signup");
    }
  }, [searchParams]);

  const validateForm = (isSignup: boolean): boolean => {
    const newErrors: { email?: string; referralCode?: string } = {};
    
    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }

    if (isSignup && referralCode) {
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(false)) return;
    
    setLoading(true);

    try {
      const redirectTo = getAuthRedirectUrl();
      
      // Call instant-login edge function
      const response = await supabase.functions.invoke("instant-login", {
        body: { email, redirectTo },
      });

      if (response.error) {
        toast({
          variant: "destructive",
          title: "Erro no login",
          description: response.error.message || "Erro ao verificar email.",
        });
        setLoading(false);
        return;
      }

      if (!response.data?.exists) {
        toast({
          variant: "destructive",
          title: "Email não cadastrado",
          description: "Este email ainda não possui uma conta. Crie uma conta na aba 'Criar conta'.",
        });
        setActiveTab("signup");
        setLoading(false);
        return;
      }

      // Redirect to the magic link URL for instant login
      if (response.data?.loginUrl) {
        window.location.href = response.data.loginUrl;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
      });
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(true)) return;
    
    setLoading(true);

    try {
      // Check if email already exists using the instant-login function (it checks existence)
      const checkResponse = await supabase.functions.invoke("check-email-exists", {
        body: { email },
      });
      
      if (checkResponse.data?.exists) {
        toast({
          variant: "destructive",
          title: "E-mail já cadastrado",
          description: "Este e-mail já possui uma conta. Use a aba 'Entrar' para acessar instantaneamente.",
        });
        setActiveTab("login");
        setLoading(false);
        return;
      }

      // Store referral code for processing after login
      if (referralCode) {
        localStorage.setItem('pending_referral_code', referralCode);
      }

      const redirectUrl = getAuthRedirectUrl();

      // Send confirmation email for new user
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
          data: { referral_code_used: referralCode || null },
        },
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro no cadastro",
          description: error.message,
        });
      } else {
        setEmailSent(true);
        toast({
          title: "Email enviado!",
          description: "Verifique sua caixa de entrada para confirmar seu email e acessar.",
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
      const redirectUrl = getAuthRedirectUrl();
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        },
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

  // Email sent confirmation screen (only for signup)
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
              Enviamos um link de confirmação para:
              <br />
              <strong className="text-foreground">{email}</strong>
            </p>

            <div className="space-y-3">
              <Button
                className="w-full bg-[#FFFFFF] border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium shadow-sm"
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
        description="Entre ou cadastre-se para participar do programa de premiação iNeed."
      />
      
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <img src={loginStars} alt="Estrelas" className="w-72 h-auto mb-4 mx-auto" />
            <h1 className="text-2xl font-omne-semibold text-foreground">
              Participe e ganhe prêmios!
            </h1>
            <p className="text-muted-foreground mt-2 font-omne-regular">
              Acesso rápido e sem senha!
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="font-omne-medium">Entrar</TabsTrigger>
              <TabsTrigger value="signup" className="font-omne-medium">Criar conta</TabsTrigger>
            </TabsList>

            {/* Login Tab - Instant access for existing users */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="font-omne-regular flex items-center gap-2">
                    <Mail size={16} className="text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="login-email"
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

                <Button
                  type="submit"
                  className="w-full bg-[#FFFFFF] border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium shadow-sm"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Entrar
                </Button>

                <p className="text-center text-xs text-muted-foreground font-omne-regular">
                  Acesso instantâneo para emails já cadastrados.
                </p>
              </form>
            </TabsContent>

            {/* Signup Tab - Requires email confirmation */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="font-omne-regular flex items-center gap-2">
                    <Mail size={16} className="text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="signup-email"
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
                  className="w-full bg-[#FFFFFF] border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium shadow-sm"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Criar conta
                </Button>

                <p className="text-center text-xs text-muted-foreground font-omne-regular">
                  Você receberá um email para confirmar seu cadastro.
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6 font-omne-regular">
          Ao continuar, você concorda com nossos termos de uso e política de privacidade.
        </p>
      </div>
    </div>
  );
}
