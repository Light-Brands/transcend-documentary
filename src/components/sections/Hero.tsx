'use client';

import { motion } from 'framer-motion';
import { VideoBackground } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Hero() {
  return (
    <section id="hero" className="relative">
      <VideoBackground overlayOpacity={0.75}>
        <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center relative">
          {/* Opening marker */}
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-accent text-[0.55rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
              A Documentary Series
            </span>
          </motion.div>

          {/* Title card */}
          <div className="flex flex-col items-center">
            <motion.div
              className="w-8 h-px bg-[var(--color-sage-muted)] mb-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <motion.h1
              className="font-display text-display-sm md:text-display lg:text-display-lg text-[var(--text-primary)] tracking-[0.12em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {CONTENT.hero.title}
            </motion.h1>

            <motion.div
              className="flex items-center gap-2.5 my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="w-4 h-px bg-[var(--border-color)]" />
              <div className="w-1 h-1 rounded-full bg-[var(--color-sage)]" />
              <div className="w-4 h-px bg-[var(--border-color)]" />
            </motion.div>

            <motion.p
              className="font-display italic text-quote-sm md:text-quote text-[var(--text-secondary)] max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              &ldquo;{CONTENT.hero.tagline}&rdquo;
            </motion.p>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <span className="font-accent text-[0.5rem] uppercase text-[var(--text-muted)] tracking-[0.12em]">
              {CONTENT.hero.scrollHint}
            </span>
            <div className="relative h-5 w-px">
              <div className="absolute inset-0 bg-[var(--border-color)]" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-[var(--color-sage)]"
                initial={{ height: '0%' }}
                animate={{ height: ['0%', '100%', '0%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  );
}

export default Hero;
