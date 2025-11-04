import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/useWishlist";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WishlistButton = () => {
  const { wishlist } = useWishlist();
  const count = wishlist.length;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            asChild
          >
            <a href="/wishlist">
              <Heart className={count > 0 ? "fill-red-500 text-red-500" : ""} />
              {count > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {count}
                </Badge>
              )}
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Favoritos ({count})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WishlistButton;
