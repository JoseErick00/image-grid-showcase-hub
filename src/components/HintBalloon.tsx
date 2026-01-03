import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HintBalloonProps {
  message: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onDismiss: () => void;
  delay?: number;
  className?: string;
}

const HintBalloon: React.FC<HintBalloonProps> = ({
  message,
  position = 'left',
  onDismiss,
  delay = 1500,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-primary',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-primary',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-primary',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-primary',
  };

  return (
    <div
      className={cn(
        'absolute z-50 animate-fade-in',
        positionClasses[position],
        className
      )}
    >
      <div className="relative bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-elegant max-w-[200px] text-sm font-medium">
        {/* Arrow */}
        <div
          className={cn(
            'absolute w-0 h-0 border-[6px]',
            arrowClasses[position]
          )}
        />
        
        {/* Content */}
        <div className="flex items-start gap-2">
          <span className="flex-1">{message}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDismiss();
            }}
            className="flex-shrink-0 hover:opacity-70 transition-opacity"
            aria-label="Fechar dica"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HintBalloon;
