import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HintBalloonProps {
  message: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onDismiss: () => void;
  delay?: number;
  autoHideDuration?: number;
  className?: string;
}

const HintBalloon: React.FC<HintBalloonProps> = ({
  message,
  position = 'left',
  onDismiss,
  delay = 1500,
  autoHideDuration = 15000,
  className,
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

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-[#171717]',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-[#171717]',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-[#171717]',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-[#171717]',
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
      <div className="relative bg-white/90 backdrop-blur-sm border border-[#171717] text-[#171717] px-3 py-1.5 rounded-md shadow-md max-w-[280px] text-xs font-medium leading-tight animate-subtle-pulse">
        {/* Arrow */}
        <div
          className={cn(
            'absolute w-0 h-0 border-[5px]',
            arrowClasses[position]
          )}
        />
        
        {/* Content */}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default HintBalloon;
