import { LayoutGrid, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGridLayout } from '@/hooks/useGridLayout';

const GridLayoutToggle = () => {
  const { isCompactMode, toggleLayout } = useGridLayout();

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <Button
        variant="secondary"
        size="icon"
        onClick={toggleLayout}
        className="rounded-full shadow-elegant hover:shadow-glow w-12 h-12 bg-background/90 backdrop-blur-sm border border-border hover:bg-accent"
        aria-label="Toggle grid layout"
      >
        {isCompactMode ? (
          <Grid3X3 className="h-5 w-5" />
        ) : (
          <LayoutGrid className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default GridLayoutToggle;