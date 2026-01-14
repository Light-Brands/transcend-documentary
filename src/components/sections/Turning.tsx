'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Turning() {
  return (
    <section
      id="turning"
      className="relative min-h-[60vh] flex items-center justify-center px-6 py-20 bg-[var(--bg-secondary)]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]" />

      {/* Scene marker */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-px bg-[var(--border-color)]" />
          <span className="font-accent text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
            The Turning
          </span>
          <div className="w-4 h-px bg-[var(--border-color)]" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.turning.lines}
          className="space-y-1.5"
          lineClassName="font-display text-section-sm md:text-section text-[var(--text-secondary)] leading-tight"
          lightLines={[3]}
          staggerDelay={0.18}
        />
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-sage-pale)]/30 to-transparent pointer-events-none" />
    </section>
  );
}

export default Turning;
