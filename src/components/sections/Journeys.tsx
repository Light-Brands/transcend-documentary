'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { EpisodeGrid } from '@/components/ui/EpisodeCard';
import { CONTENT, EPISODES } from '@/lib/constants';

export function Journeys() {
  return (
    <section
      id="journeys"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background gradient - dark to warm transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-[#141311] to-[#1a1815]" />

      {/* Subtle warm light glow from bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%] pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full bg-gradient-radial from-sacred-gold/[0.03] via-ember/[0.02] to-transparent" />
      </motion.div>

      {/* Decorative light rays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-void-black to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header with enhanced styling */}
        <ScrollReveal className="text-center mb-8">
          <motion.div
            className="inline-block"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption uppercase text-sacred-gold tracking-[0.3em]">
              {CONTENT.journeys.header}
            </span>
          </motion.div>
        </ScrollReveal>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-sacred-gold/40" />
          <div className="w-2 h-2 bg-sacred-gold/60 rotate-45" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-sacred-gold/40" />
        </motion.div>

        {/* Intro text with warmer styling */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.journeys.intro}
            className="space-y-3"
            lineClassName="font-display text-section-sm md:text-section text-cloud/90"
            staggerDelay={0.15}
          />
        </div>

        {/* Episode cards grid with warm ambient glow */}
        <div className="relative">
          {/* Subtle ambient glow behind cards */}
          <motion.div
            className="absolute inset-0 -inset-x-8 -inset-y-12 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full h-full bg-gradient-radial from-sacred-gold/[0.02] via-transparent to-transparent" />
          </motion.div>

          <EpisodeGrid episodes={EPISODES} />
        </div>

        {/* Bottom flourish */}
        <motion.div
          className="mt-20 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 text-mist">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-smoke" />
            <span className="text-caption-sm uppercase tracking-widest">Click to explore each story</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-smoke" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journeys;
