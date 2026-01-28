import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Bell, 
  Database, 
  Home,
  Shield,
  Settings,
  Activity
} from "lucide-react";
import AdminGuard from "@/components/admin/AdminGuard";
import { useGamification } from "@/contexts/GamificationContext";

const AdminHubContent = () => {
  const { user, gamification } = useGamification();

  const adminTools = [
    {
      title: "Métricas",
      description: "Estatísticas de usuários, gamificação, afiliados e PWA",
      icon: BarChart3,
      href: "/admin/metricas",
      color: "bg-blue-500",
      badge: "Analytics",
    },
    {
      title: "Notificações Push",
      description: "Enviar notificações para todos os usuários inscritos",
      icon: Bell,
      href: "/admin/notificacoes",
      color: "bg-green-500",
      badge: "Broadcast",
    },
    {
      title: "Migração de Dados",
      description: "Ferramentas para migração e sincronização de campanhas",
      icon: Database,
      href: "/admin/migrate",
      color: "bg-purple-500",
      badge: "Tools",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-brand-green rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Hub
              </h1>
            </div>
            <p className="text-gray-600">
              Central de gerenciamento do iNeed
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Logado como</p>
              <p className="font-medium text-gray-900">
                {gamification?.referral_code || user?.id?.slice(0, 8)}
              </p>
            </div>
            <Badge className="bg-brand-green">Admin</Badge>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Status do Sistema</p>
                  <p className="font-semibold text-green-600">Operacional</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Segurança</p>
                  <p className="font-semibold text-blue-600">Autenticado</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <Settings className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Ambiente</p>
                  <p className="font-semibold text-purple-600">Produção</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tools Grid */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ferramentas Administrativas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminTools.map((tool) => (
              <Link key={tool.href} to={tool.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${tool.color}`}>
                        <tool.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">{tool.badge}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-brand-green transition-colors">
                      {tool.title}
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-colors">
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Links Rápidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href="https://supabase.com/dashboard/project/uwzsmfoxjfexodgblzfk" target="_blank" rel="noopener noreferrer">
                  Supabase Dashboard
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://supabase.com/dashboard/project/uwzsmfoxjfexodgblzfk/auth/users" target="_blank" rel="noopener noreferrer">
                  Usuários Auth
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://supabase.com/dashboard/project/uwzsmfoxjfexodgblzfk/functions" target="_blank" rel="noopener noreferrer">
                  Edge Functions
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-4">
          <p>iNeed Admin Hub • Acesso restrito a administradores</p>
        </div>
      </div>
    </div>
  );
};

const AdminHub = () => {
  return (
    <AdminGuard>
      <AdminHubContent />
    </AdminGuard>
  );
};

export default AdminHub;
