import { useEffect, useState, useRef, CSSProperties } from 'react';

// Hook for SVG pulse animation
interface UsePulseAnimationOptions {
  pulseColor?: string;
  pulseDirection?: 'left' | 'right';
  pulseOpacity?: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function usePulseAnimation({
  pulseColor = '#ff4444',
  pulseDirection = 'left',
  pulseOpacity = 0.6,
  duration = 1000,
  delay = 2000,
  enabled = true
}: UsePulseAnimationOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(enabled);

  useEffect(() => {
    setIsAnimating(enabled);
  }, [enabled]);

  const totalDuration = duration + delay;
  const travelPercentage = (duration / totalDuration) * 100;

  const containerStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block'
  };

  const pulseStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    filter: `drop-shadow(0 0 10px ${pulseColor}) brightness(1.3)`,
    opacity: isAnimating ? pulseOpacity : 0,
    maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 40%, transparent 60%)',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 40%, transparent 60%)',
    maskSize: '200% 100%',
    WebkitMaskSize: '200% 100%',
    animation: isAnimating ? `pulse-travel-${pulseDirection} ${totalDuration}ms ease-in-out infinite` : 'none',
    pointerEvents: 'none' as const
  };

  // Generate CSS keyframes
  const keyframes = `
    @keyframes pulse-travel-left {
      0% {
        mask-position: 200% 0;
        -webkit-mask-position: 200% 0;
      }
      ${travelPercentage}% {
        mask-position: -200% 0;
        -webkit-mask-position: -200% 0;
      }
      ${travelPercentage + 0.01}%, 100% {
        mask-position: 200% 0;
        -webkit-mask-position: 200% 0;
      }
        100% {
        mask-position: 200% 0;
        -webkit-mask-position: 200% 0;
      }
    }
    
    @keyframes pulse-travel-right {
      0% {
        mask-position: -200% 0;
        -webkit-mask-position: -200% 0;
      }
      ${travelPercentage}% {
        mask-position: 200% 0;
        -webkit-mask-position: 200% 0;
      }
      ${travelPercentage + 0.01}%, 100% {
        mask-position: -200% 0;
        -webkit-mask-position: -200% 0;
      }
    }
  `;

  return {
    containerRef,
    containerStyle,
    pulseStyle,
    keyframes,
    // Helper component to inject keyframes
    PulseKeyframes: () => <style dangerouslySetInnerHTML={{ __html: keyframes }} />
  };
}