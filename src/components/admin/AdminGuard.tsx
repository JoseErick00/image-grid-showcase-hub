import { ReactNode } from "react";
import { useAdminRole } from "@/hooks/useAdminRole";
import { useGamification } from "@/contexts/GamificationContext";
import { Link } from "react-router-dom";
import { ShieldAlert, Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AdminGuardProps {
  children: ReactNode;
}

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { user, loading: userLoading } = useGamification();
  const { isAdmin, loading: adminLoading } = useAdminRole();

  // Show loading state
  if (userLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-brand-green" />
          <p className="text-gray-600 text-lg">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <LogIn className="h-8 w-8 text-yellow-600" />
            </div>
            <CardTitle>Login Necessário</CardTitle>
            <CardDescription>
              Você precisa estar logado para acessar esta área.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link to="/auth">Fazer Login</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/">Voltar ao Site</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not an admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <ShieldAlert className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle>Acesso Negado</CardTitle>
            <CardDescription>
              Você não tem permissão para acessar esta área administrativa.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p className="text-sm text-gray-500 text-center">
              Se você acredita que deveria ter acesso, entre em contato com o administrador.
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/">Voltar ao Site</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User is admin - render children
  return <>{children}</>;
};

export default AdminGuard;
