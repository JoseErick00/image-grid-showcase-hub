import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HintBalloonProps {
  message: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onDismiss: () => void;
  delay?: number;
  autoHideDuration?: number;
  className?: string;
  borderColor?: string;
}

const HintBalloon: React.FC<HintBalloonProps> = ({
  message,
  position = 'left',
  onDismiss,
  delay = 1500,
  autoHideDuration = 15000,
  className,
  borderColor = '#171717',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Show after initial delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    // Start hiding after autoHideDuration
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, autoHideDuration);

    return () => clearTimeout(hideTimer);
  }, [isVisible, autoHideDuration]);

  useEffect(() => {
    if (!isHiding) return;

    // Call onDismiss after fade-out animation completes
    const dismissTimer = setTimeout(() => {
      onDismiss();
    }, 400);

    return () => clearTimeout(dismissTimer);
  }, [isHiding, onDismiss]);

  if (!isVisible) return null;

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const getArrowStyle = () => {
    const baseStyle = { borderWidth: '5px' };
    switch (position) {
      case 'top':
        return { ...baseStyle, borderColor: `${borderColor} transparent transparent transparent` };
      case 'bottom':
        return { ...baseStyle, borderColor: `transparent transparent ${borderColor} transparent` };
      case 'left':
        return { ...baseStyle, borderColor: `transparent transparent transparent ${borderColor}` };
      case 'right':
        return { ...baseStyle, borderColor: `transparent ${borderColor} transparent transparent` };
      default:
        return baseStyle;
    }
  };

  const arrowPositionClasses = {
    top: 'top-full left-1/2 -translate-x-1/2',
    bottom: 'bottom-full left-1/2 -translate-x-1/2',
    left: 'left-full top-1/2 -translate-y-1/2',
    right: 'right-full top-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={cn(
        'absolute z-50',
        isHiding ? 'animate-hint-fade-out' : 'animate-hint-fade-in',
        positionClasses[position],
        className
      )}
    >
      <div 
        className="relative bg-white/90 backdrop-blur-sm text-[#171717] px-4 py-2 rounded-md shadow-md min-w-[180px] max-w-[320px] text-xs font-medium leading-tight animate-subtle-pulse whitespace-nowrap"
        style={{ border: `1px solid ${borderColor}` }}
      >
        {/* Arrow */}
        <div
          className={cn(
            'absolute w-0 h-0',
            arrowPositionClasses[position]
          )}
          style={getArrowStyle()}
        />
        
        {/* Content */}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default HintBalloon;
