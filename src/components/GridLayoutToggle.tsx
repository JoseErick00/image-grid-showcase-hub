import { LayoutGrid, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGridLayout } from '@/hooks/useGridLayout';
import { useLocation } from 'react-router-dom';
import { isBrasilDomain } from '@/hooks/useCurrentDomain';
import HintBalloon from './HintBalloon';
import { useHintBalloon } from '@/contexts/HintBalloonContext';

const GridLayoutToggle = () => {
  const { isCompactMode, toggleLayout } = useGridLayout();
  const location = useLocation();
  const onBrasilDomain = isBrasilDomain();
  const isBrasilPage = onBrasilDomain || location.pathname.startsWith('/brasil');
  const { pageHints, dismissHint, isHintDismissed } = useHintBalloon();
  
  // Route prefix for Brasil pages
  const brasilPrefix = onBrasilDomain ? '' : '/brasil';

  // Pages where the button should NOT appear (main pages)
  const excludedPaths = isBrasilPage 
    ? [
        brasilPrefix || '/',          // Todas (Principal)
        `${brasilPrefix}/premios`,    // Premiação
        `${brasilPrefix}/sobre`,      // Sobre
        `${brasilPrefix}/contato`,    // Contato
      ]
    : [
        '/',                          // Main index
        '/about',                     // About
        '/contact',                   // Contact
      ];

  // Also check for exact match on root for Brasil domain
  const currentPath = location.pathname;
  const shouldShow = !excludedPaths.includes(currentPath) && 
                     !(onBrasilDomain && currentPath === '/');

  const showLupaHint = pageHints.lupa && !isHintDismissed('lupa');

  if (!shouldShow) return null;

  const handleToggle = () => {
    // Dismiss hint when user clicks the button
    if (showLupaHint) {
      dismissHint('lupa');
    }
    toggleLayout();
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
      <div className="relative">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleToggle}
          className="rounded-full shadow-elegant hover:shadow-glow w-16 h-16 bg-background/90 backdrop-blur-sm border-2 border-border hover:text-white"
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

        {/* Hint Balloon for lupa */}
        {showLupaHint && (
          <HintBalloon
            message={pageHints.lupa!}
            position="left"
            onDismiss={() => dismissHint('lupa')}
            delay={2500}
          />
        )}
      </div>
      <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded">
        {isBrasilPage ? 'Lupa' : 'Grid'}
      </span>
    </div>
  );
};

export default GridLayoutToggle;