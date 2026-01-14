'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Turning() {
  return (
    <section
      id="turning"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[var(--bg-secondary)] transition-colors duration-500"
    >
      {/* Background gradient that creates depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)] transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Scene transition indicator */}
      <motion.div
        className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-[var(--border-color)]" />
          <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            The Turning
          </span>
          <div className="w-6 h-px bg-[var(--border-color)]" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.turning.lines}
          className="space-y-3"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-[var(--text-secondary)] leading-[1.3]"
          lightLines={[3]}
          staggerDelay={0.3}
        />
      </div>

      {/* Subtle warm glow emerging from bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-t from-sacred-gold/[0.03] via-ember/[0.01] to-transparent" />
      </motion.div>
    </section>
  );
}

export default Turning;
