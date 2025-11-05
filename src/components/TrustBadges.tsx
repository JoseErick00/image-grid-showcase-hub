import { Shield, Clock, Star, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "Links Verificados",
      description: "Todos checados diariamente"
    },
    {
      icon: Clock,
      text: "Atualizado Hoje",
      description: "Sempre com novidades"
    },
    {
      icon: Star,
      text: "Curadoria Especializada",
      description: "Selecionados por experts"
    },
    {
      icon: Lock,
      text: "Compra Segura",
      description: "Direto nas plataformas oficiais"
    }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ backgroundColor: '#171717' }}
              >
                <div className="mb-3 p-3 rounded-full bg-primary/10">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-omne-medium text-sm md:text-base text-foreground mb-1">
                  {badge.text}
                </h3>
                <p className="font-omne-regular text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
