'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { EpisodeGrid } from '@/components/ui/EpisodeCard';
import { CONTENT, EPISODES } from '@/lib/constants';

export function Journeys() {
  return (
    <section
      id="journeys"
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background gradient - warm transition zone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--warmth-1)] via-[var(--warmth-2,#141311)] to-[var(--warmth-3,#1a1815)] transition-colors duration-500" />

      {/* Subtle warm ambient light */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[50%] pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full bg-gradient-radial from-sacred-gold/[0.025] via-ember/[0.015] to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Festival-style header - like a program section */}
        <div className="text-center mb-16 md:mb-20">
          {/* Scene marker */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-accent text-[0.6rem] uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Official Selection
            </span>
          </motion.div>

          {/* Main header - film festival style */}
          <ScrollReveal>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl tracking-[0.15em] uppercase text-sacred-gold mb-6">
              {CONTENT.journeys.header}
            </h2>
          </ScrollReveal>

          {/* Elegant divider - like a festival program element */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-px w-12 bg-[var(--border-color)]" />
            <div className="w-1 h-1 rounded-full bg-sacred-gold/50" />
            <div className="h-px w-12 bg-[var(--border-color)]" />
          </motion.div>
        </div>

        {/* Intro text - documentary series premise */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.journeys.intro}
            className="space-y-3"
            lineClassName="font-display text-lg md:text-section-sm lg:text-section text-[var(--text-secondary)] leading-[1.4]"
            staggerDelay={0.18}
          />
        </div>

        {/* Episode counter - festival program style */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            6 Episodes
          </span>
        </motion.div>

        {/* Episode cards grid - festival program panels */}
        <div className="relative">
          <EpisodeGrid episodes={EPISODES} />
        </div>

        {/* Series Close Line */}
        <div className="mt-20 md:mt-28 text-center">
          <LineReveal
            lines={CONTENT.journeys.closeLine}
            className="space-y-2"
            lineClassName="font-display text-lg md:text-xl lg:text-2xl text-sacred-gold/90 leading-[1.4] tracking-wide"
            staggerDelay={0.25}
          />
        </div>

        {/* Bottom flourish - quiet invitation */}
        <motion.div
          className="mt-16 md:mt-20 flex items-center justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 text-[var(--text-muted)]">
            <div className="h-px w-8 bg-[var(--border-color)] opacity-50" />
            <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] opacity-70">
              Click to explore each story
            </span>
            <div className="h-px w-8 bg-[var(--border-color)] opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journeys;
