import { LayoutGrid, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGridLayout } from '@/hooks/useGridLayout';

const GridLayoutToggle = () => {
  const { isCompactMode, toggleLayout } = useGridLayout();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <Button
        variant="secondary"
        size="icon"
        onClick={toggleLayout}
        className="rounded-full shadow-elegant hover:shadow-glow w-16 h-16 bg-background/90 backdrop-blur-sm border border-border hover:text-white"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#575757";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "";
          e.currentTarget.style.color = "";
        }}
        aria-label="Toggle grid layout"
      >
        {isCompactMode ? (
          <Grid3X3 className="h-6 w-6" />
        ) : (
          <LayoutGrid className="h-6 w-6" />
        )}
      </Button>
      <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded">
        Lupa
      </span>
    </div>
  );
};

export default GridLayoutToggle;