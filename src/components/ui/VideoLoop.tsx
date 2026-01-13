'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VideoLoopProps {
  src?: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  aspectRatio?: 'cinematic' | 'portrait' | 'square' | 'video';
  showOverlay?: boolean;
  placeholderGradient?: string;
}

export function VideoLoop({
  src,
  poster,
  className,
  overlayClassName,
  aspectRatio = 'cinematic',
  showOverlay = true,
  placeholderGradient = 'from-ash via-smoke to-void-black',
}: VideoLoopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  const aspectClasses = {
    cinematic: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    video: 'aspect-video',
  };

  // Show placeholder if no src, error, or still loading
  const showPlaceholder = !src || hasError;

  return (
    <div className={cn('relative overflow-hidden', aspectClasses[aspectRatio], className)}>
      {/* Placeholder/fallback gradient */}
      {showPlaceholder && (
        <motion.div
          className={cn(
            'absolute inset-0 bg-gradient-to-br',
            placeholderGradient
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated ambient glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-sacred-gold/10 blur-3xl animate-pulse" />
          </div>
        </motion.div>
      )}

      {/* Actual video */}
      {src && !hasError && (
        <video
          ref={videoRef}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Overlay gradient */}
      {showOverlay && (
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-void-black via-void-black/50 to-transparent',
            overlayClassName
          )}
        />
      )}
    </div>
  );
}

// Full viewport video background
interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
}

export function VideoBackground({
  src,
  poster,
  children,
  overlayOpacity = 0.6,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video or placeholder */}
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-void-black via-ash to-smoke">
          {/* Ambient animated elements for placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-96 h-96 rounded-full bg-sacred-gold/5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            rgba(10, 10, 10, ${overlayOpacity * 0.5}) 0%,
            rgba(10, 10, 10, ${overlayOpacity}) 50%,
            rgba(10, 10, 10, ${overlayOpacity * 1.2}) 100%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default VideoLoop;
