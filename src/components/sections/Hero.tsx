'use client';

import { motion } from 'framer-motion';
import { VideoBackground } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Hero() {
  return (
    <section id="hero" className="relative">
      <VideoBackground overlayOpacity={0.6}>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
          {/* Opening scene marker - like a film slate */}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <span className="font-accent text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] opacity-60">
              A Documentary Series
            </span>
          </motion.div>

          {/* Main title card container */}
          <div className="flex flex-col items-center justify-center">
            {/* Decorative line above title */}
            <motion.div
              className="w-12 h-px bg-sacred-gold/40 mb-10"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Title - treated like opening credits typography */}
            <motion.h1
              className="font-display text-[2.5rem] sm:text-display-sm md:text-display lg:text-display-lg text-[var(--text-primary)] tracking-[0.2em] md:tracking-[0.25em]"
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {CONTENT.hero.title}
            </motion.h1>

            {/* Subtle divider */}
            <motion.div
              className="flex items-center gap-4 my-8 md:my-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <div className="w-8 h-px bg-[var(--border-color)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-sacred-gold/50" />
              <div className="w-8 h-px bg-[var(--border-color)]" />
            </motion.div>

            {/* Tagline - like a film logline */}
            <motion.p
              className="font-display italic text-lg sm:text-quote-sm md:text-quote text-[var(--text-secondary)] max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1.5, delay: 2.2 }}
            >
              &ldquo;{CONTENT.hero.tagline}&rdquo;
            </motion.p>
          </div>

          {/* Scroll invitation - quiet, not shouty */}
          <motion.div
            className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.5 }}
          >
            <span className="font-accent text-[0.65rem] uppercase text-[var(--text-muted)] tracking-[0.25em] opacity-70">
              {CONTENT.hero.scrollHint}
            </span>

            {/* Animated scroll line */}
            <div className="relative h-10 w-px">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--border-color)] to-transparent opacity-30" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-sacred-gold via-sacred-gold to-transparent"
                initial={{ height: '0%' }}
                animate={{ height: ['0%', '100%', '0%'] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Corner accents - subtle film frame reference */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[var(--border-color)] opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[var(--border-color)] opacity-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[var(--border-color)] opacity-20 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[var(--border-color)] opacity-20 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
        </div>
      </VideoBackground>
    </section>
  );
}

export default Hero;
