import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Bell, Send, Users, Loader2, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import AdminGuard from "@/components/admin/AdminGuard";

interface SubscriptionStats {
  total: number;
  active: number;
  inactive: number;
}

interface NotificationForm {
  title: string;
  body: string;
  image: string;
  url: string;
}

const AdminNotificationsContent = () => {
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [stats, setStats] = useState<SubscriptionStats | null>(null);
  const [lastResult, setLastResult] = useState<{ sent: number; failed: number; total: number } | null>(null);
  const [form, setForm] = useState<NotificationForm>({
    title: "",
    body: "",
    image: "",
    url: "/",
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    try {
      // Fetch all subscriptions using service role through edge function
      const { data, error } = await supabase.functions.invoke("admin-metrics", {
        body: { action: "push-stats" }
      });

      if (error) {
        // Fallback: try to get basic count
        console.error("Error fetching push stats:", error);
        setStats({ total: 0, active: 0, inactive: 0 });
      } else if (data?.pushStats) {
        setStats(data.pushStats);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendNotification = async () => {
    if (!form.title.trim() || !form.body.trim()) {
      toast.error("Título e mensagem são obrigatórios");
      return;
    }

    setSending(true);
    setLastResult(null);

    try {
      const payload: Record<string, string> = {
        title: form.title,
        body: form.body,
        url: form.url || "/",
      };

      if (form.image.trim()) {
        payload.image = form.image;
      }

      const { data, error } = await supabase.functions.invoke("send-push-notification", {
        body: payload,
      });

      if (error) throw error;

      setLastResult({
        sent: data.sent || 0,
        failed: data.failed || 0,
        total: data.total || 0,
      });

      if (data.sent > 0) {
        toast.success(`${data.sent} notificações enviadas com sucesso!`);
        // Clear form on success
        setForm({ title: "", body: "", image: "", url: "/" });
      } else {
        toast.warning("Nenhuma notificação foi enviada");
      }
    } catch (err: any) {
      console.error("Error sending notification:", err);
      toast.error(`Erro ao enviar: ${err.message}`);
    } finally {
      setSending(false);
      fetchStats(); // Refresh stats after sending
    }
  };

  const presetNotifications = [
    {
      title: "🔥 Ofertas Imperdíveis!",
      body: "Confira as melhores ofertas do dia no iNeed!",
      url: "/",
    },
    {
      title: "🆕 Novos Produtos",
      body: "Acabamos de adicionar produtos incríveis. Vem conferir!",
      url: "/",
    },
    {
      title: "⚡ Flash Sale",
      body: "Promoção relâmpago por tempo limitado!",
      url: "/",
    },
    {
      title: "🎁 Cupom Exclusivo",
      body: "Temos um cupom especial esperando por você!",
      url: "/",
    },
  ];

  const applyPreset = (preset: typeof presetNotifications[0]) => {
    setForm({
      ...form,
      title: preset.title,
      body: preset.body,
      url: preset.url,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Bell className="h-8 w-8 text-brand-green" />
              Push Notifications
            </h1>
            <p className="text-gray-500 mt-1">
              Envie notificações personalizadas para todos os usuários inscritos
            </p>
          </div>
          <Button variant="outline" onClick={fetchStats} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total de Inscrições
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-2xl font-bold">
                  {loading ? "..." : stats?.total || 0}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Inscrições Ativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold text-green-600">
                  {loading ? "..." : stats?.active || 0}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Inscrições Inativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-gray-400" />
                <span className="text-2xl font-bold text-gray-400">
                  {loading ? "..." : stats?.inactive || 0}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last Result */}
        {lastResult && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">
                    Último envio: {lastResult.sent} enviadas, {lastResult.failed} falhas
                  </span>
                </div>
                <Badge variant="outline" className="bg-white">
                  Total: {lastResult.total}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notification Form */}
        <Card>
          <CardHeader>
            <CardTitle>Enviar Nova Notificação</CardTitle>
            <CardDescription>
              Preencha os campos abaixo para enviar uma notificação push para todos os usuários inscritos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Presets */}
            <div>
              <Label className="text-sm text-gray-500 mb-2 block">
                Modelos prontos (clique para usar):
              </Label>
              <div className="flex flex-wrap gap-2">
                {presetNotifications.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => applyPreset(preset)}
                    className="text-xs"
                  >
                    {preset.title.split(" ")[0]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                placeholder="Ex: 🔥 Ofertas Imperdíveis!"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                maxLength={100}
              />
              <p className="text-xs text-gray-500">{form.title.length}/100 caracteres</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="body">Mensagem *</Label>
              <Textarea
                id="body"
                placeholder="Ex: Confira as melhores ofertas do dia no iNeed!"
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                maxLength={200}
                rows={3}
              />
              <p className="text-xs text-gray-500">{form.body.length}/200 caracteres</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL da Imagem (opcional)</Label>
              <Input
                id="image"
                placeholder="https://exemplo.com/imagem.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                type="url"
              />
              <p className="text-xs text-gray-500">
                Imagem que aparecerá na notificação (recomendado: 512x512px)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Link de Destino</Label>
              <Input
                id="url"
                placeholder="/"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
              />
              <p className="text-xs text-gray-500">
                Página que abrirá quando o usuário clicar (ex: / ou https://...)
              </p>
            </div>

            {/* Preview */}
            {(form.title || form.body) && (
              <div className="border rounded-lg p-4 bg-gray-50">
                <Label className="text-sm text-gray-500 mb-2 block">Preview:</Label>
                <div className="bg-white rounded-lg shadow-sm border p-3 flex gap-3">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-12 h-12 rounded object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-brand-green flex items-center justify-center">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">
                      {form.title || "Título da notificação"}
                    </p>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {form.body || "Mensagem da notificação"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={handleSendNotification}
              disabled={sending || !form.title.trim() || !form.body.trim()}
              className="w-full bg-brand-green hover:bg-brand-green/90"
              size="lg"
            >
              {sending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Notificação para {stats?.active || 0} Usuários
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" asChild>
            <a href="/admin/metricas">📊 Métricas</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/admin/migrate">🔄 Migração</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/">🏠 Voltar ao Site</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const AdminNotifications = () => {
  return (
    <AdminGuard>
      <AdminNotificationsContent />
    </AdminGuard>
  );
};

export default AdminNotifications;
