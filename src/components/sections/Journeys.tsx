'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { EpisodeGrid } from '@/components/ui/EpisodeCard';
import { CONTENT, EPISODES } from '@/lib/constants';

export function Journeys() {
  return (
    <section
      id="journeys"
      className="relative py-16 md:py-20 overflow-hidden bg-[var(--bg-warm)]"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-accent text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              Official Selection
            </span>
          </motion.div>

          <ScrollReveal>
            <h2 className="font-display text-section-sm md:text-section tracking-[0.1em] uppercase text-[var(--color-sage)] mb-4">
              {CONTENT.journeys.header}
            </h2>
          </ScrollReveal>

          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-8 bg-[var(--border-color)]" />
            <div className="w-1 h-1 rounded-full bg-[var(--color-sage)]" />
            <div className="h-px w-8 bg-[var(--border-color)]" />
          </motion.div>
        </div>

        {/* Intro */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <LineReveal
            lines={CONTENT.journeys.intro}
            className="space-y-1.5"
            lineClassName="font-display text-section-sm md:text-section text-[var(--text-secondary)] leading-tight"
            staggerDelay={0.12}
          />
        </div>

        {/* Episode count */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-accent text-[0.5rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            6 Episodes
          </span>
        </motion.div>

        {/* Episode grid */}
        <EpisodeGrid episodes={EPISODES} />

        {/* Bottom hint */}
        <motion.div
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="font-accent text-[0.5rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Click to explore each story
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Journeys;
