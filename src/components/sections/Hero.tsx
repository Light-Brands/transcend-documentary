'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { VideoBackground } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Hero() {
  const [stage, setStage] = useState(0);
  // Stage 0: Nothing (2.5s of stillness)
  // Stage 1: "PAIN" appears
  // Stage 2: "→" appears
  // Stage 3: "PURPOSE" appears
  // Stage 4: Main tagline appears
  // Stage 5: Subtitle appears
  // Stage 6: Scroll hint appears

  useEffect(() => {
    const timings = [2500, 800, 600, 800, 1200, 1000, 800];
    let timeout: NodeJS.Timeout;

    const advanceStage = (currentStage: number) => {
      if (currentStage < 6) {
        timeout = setTimeout(() => {
          setStage(currentStage + 1);
          advanceStage(currentStage + 1);
        }, timings[currentStage]);
      }
    };

    advanceStage(0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative bg-obsidian">
      <VideoBackground overlayOpacity={0.75}>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

          {/* Subtle breathing ambient light */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-shadow-blue/20 via-transparent to-transparent animate-breathe" />
          </motion.div>

          {/* Main kinetic typography container */}
          <div className="flex flex-col items-center justify-center relative z-10">

            {/* PAIN → PURPOSE kinetic sequence */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12 min-h-[4rem] md:min-h-[6rem]">
              <AnimatePresence>
                {stage >= 1 && (
                  <motion.span
                    className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bone tracking-[0.15em] font-light"
                    initial={{ opacity: 0, y: 40, letterSpacing: '0.4em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {CONTENT.hero.kineticWords[0]}
                  </motion.span>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {stage >= 2 && (
                  <motion.span
                    className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-muted-gold"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    →
                  </motion.span>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {stage >= 3 && (
                  <motion.span
                    className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-sacred-gold tracking-[0.15em] font-light"
                    initial={{ opacity: 0, y: 40, letterSpacing: '0.4em' }}
                    animate={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {CONTENT.hero.kineticWords[1]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Silence - decorative pause element */}
            <AnimatePresence>
              {stage >= 3 && (
                <motion.div
                  className="flex items-center gap-6 mb-10 md:mb-14"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-muted-gold/40 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main tagline */}
            <AnimatePresence>
              {stage >= 4 && (
                <motion.h1
                  className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-light tracking-[0.2em] md:tracking-[0.3em] uppercase font-light max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {CONTENT.hero.tagline}
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence>
              {stage >= 5 && (
                <motion.p
                  className="font-display italic text-base sm:text-lg md:text-xl text-mist mt-8 md:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 1.2 }}
                >
                  {CONTENT.hero.subtitle}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Scroll invitation - ceremonial, not shouty */}
          <AnimatePresence>
            {stage >= 6 && (
              <motion.div
                className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="font-display text-xs tracking-[0.4em] uppercase text-mist/60">
                  {CONTENT.hero.scrollHint}
                </span>

                {/* Animated scroll line - subtle, ceremonial */}
                <div className="relative h-12 w-px">
                  <div className="absolute inset-0 bg-gradient-to-b from-smoke/30 to-transparent" />
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-muted-gold/60 via-muted-gold/30 to-transparent"
                    initial={{ height: '0%' }}
                    animate={{ height: ['0%', '100%', '0%'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 0.8,
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner frame accents - film frame reference, very subtle */}
          <motion.div
            className="absolute top-6 left-6 w-16 h-16 border-l border-t border-smoke/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 border-r border-t border-smoke/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-smoke/20 pointer-events-none hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />
          <motion.div
            className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-smoke/20 pointer-events-none hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          />
        </div>
      </VideoBackground>
    </section>
  );
}

export default Hero;
