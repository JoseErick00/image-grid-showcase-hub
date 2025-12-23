import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Users, Mail, Lock } from "lucide-react";
import SEO from "@/components/SEO";
import { z } from "zod";
import loginStars from "@/assets/login-stars.png";

const emailSchema = z.string().email("Email inválido");
const passwordSchema = z.string().min(6, "Senha deve ter no mínimo 6 caracteres");
const referralCodeSchema = z.string().max(8, "Código deve ter no máximo 8 caracteres").optional();

export default function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; referralCode?: string }>({});
  
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
      setActiveTab("signup"); // Switch to signup if referral code present
    }
  }, [searchParams]);

  const validateForm = (isSignup: boolean): boolean => {
    const newErrors: { email?: string; password?: string; referralCode?: string } = {};
    
    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }

    try {
      passwordSchema.parse(password);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.password = e.errors[0].message;
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

  const checkEmailExists = async (emailToCheck: string): Promise<boolean> => {
    try {
      const response = await supabase.functions.invoke("check-email-exists", {
        body: { email: emailToCheck },
      });

      if (response.error) {
        console.error("Error checking email:", response.error);
        return false; // Assume doesn't exist on error, let signup proceed
      }

      return response.data?.exists === true;
    } catch (error) {
      console.error("Error invoking check-email-exists:", error);
      return false;
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(true)) return;
    
    setLoading(true);

    try {
      // Check if email already exists
      const exists = await checkEmailExists(email);
      
      if (exists) {
        toast({
          variant: "destructive",
          title: "E-mail já cadastrado",
          description: "Este e-mail já possui uma conta. Faça login ou use 'Esqueci a senha'.",
        });
        setActiveTab("login");
        setPassword("");
        setLoading(false);
        return;
      }

      // Proceed with signup
      const redirectUrl = `${window.location.origin}/brasil/premios`;
      
      const { error } = await supabase.auth.signUp({
        email,
        password,
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
          title: "Erro no cadastro",
          description: error.message,
        });
      } else {
        // Store referral code for processing after login
        if (referralCode) {
          localStorage.setItem('pending_referral_code', referralCode);
        }
        
        setEmailSent(true);
        toast({
          title: "Cadastro realizado!",
          description: "Verifique seu email para confirmar a conta.",
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(false)) return;
    
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast({
            variant: "destructive",
            title: "Credenciais inválidas",
            description: "Email ou senha incorretos. Verifique e tente novamente.",
          });
        } else if (error.message.includes("Email not confirmed")) {
          toast({
            variant: "destructive",
            title: "Email não confirmado",
            description: "Por favor, confirme seu email antes de fazer login.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Erro no login",
            description: error.message,
          });
        }
      }
      // On success, onAuthStateChange will redirect
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

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email necessário",
        description: "Digite seu email para recuperar a senha.",
      });
      return;
    }

    try {
      emailSchema.parse(email);
    } catch {
      toast({
        variant: "destructive",
        title: "Email inválido",
        description: "Digite um email válido.",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: error.message,
        });
      } else {
        toast({
          title: "Email enviado!",
          description: "Verifique sua caixa de entrada para redefinir a senha.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro inesperado.",
      });
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
          description="Um link de confirmação foi enviado para seu email."
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
              <button
                type="button"
                onClick={() => {
                  setEmailSent(false);
                  setEmail("");
                  setPassword("");
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
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="font-omne-medium">Entrar</TabsTrigger>
              <TabsTrigger value="signup" className="font-omne-medium">Criar conta</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
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

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="font-omne-regular flex items-center gap-2">
                    <Lock size={16} className="text-muted-foreground" />
                    Senha
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    className={errors.password ? "border-destructive" : ""}
                    required
                  />
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="w-full border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-omne-medium"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Entrar
                </Button>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="w-full text-sm text-muted-foreground hover:text-foreground font-omne-regular"
                  disabled={loading}
                >
                  Esqueci minha senha
                </button>
              </form>
            </TabsContent>

            {/* Signup Tab */}
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
                  <Label htmlFor="signup-password" className="font-omne-regular flex items-center gap-2">
                    <Lock size={16} className="text-muted-foreground" />
                    Senha
                  </Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className={errors.password ? "border-destructive" : ""}
                    required
                  />
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password}</p>
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
                  Criar conta
                </Button>
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
