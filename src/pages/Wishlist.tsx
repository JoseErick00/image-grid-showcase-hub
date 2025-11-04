import { useWishlist } from "@/hooks/useWishlist";
import { Button } from "@/components/ui/button";
import { Trash2, ExternalLink, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      const shareText = `Meus produtos favoritos da iNeed:\n${wishlist
        .slice(0, 5)
        .map((item, index) => `${index + 1}. ${item.title}`)
        .join("\n")}`;

      if (navigator.share) {
        await navigator.share({
          title: "Minha Lista de Favoritos - iNeed",
          text: shareText,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "Lista copiada!",
          description: "Sua lista foi copiada para a área de transferência",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-omne-medium text-3xl md:text-4xl text-foreground mb-4">
            Sua lista está vazia
          </h1>
          <p className="font-omne-regular text-lg text-muted-foreground mb-8">
            Comece a adicionar produtos aos favoritos para vê-los aqui!
          </p>
          <Button asChild variant="brand">
            <a href="/">Explorar Produtos</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-omne-medium text-3xl md:text-4xl text-foreground mb-2">
              Meus Favoritos
            </h1>
            <p className="font-omne-regular text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? "produto salvo" : "produtos salvos"}
            </p>
          </div>
          {wishlist.length > 0 && (
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-omne-medium text-base text-foreground mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="flex gap-2">
                  <Button
                    variant="brand"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Produto
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      removeFromWishlist(item.id);
                      toast({
                        title: "Removido",
                        description: "Produto removido dos favoritos",
                        duration: 2000,
                      });
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
