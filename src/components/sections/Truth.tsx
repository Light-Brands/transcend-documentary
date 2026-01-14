'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Truth() {
  return (
    <section
      id="truth"
      className="relative min-h-[70vh] flex items-center justify-center bg-[var(--bg-primary)] px-6 py-20"
    >
      {/* Scene marker */}
      <motion.div
        className="absolute top-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="act-marker">Act I</span>
      </motion.div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.truth.lines}
          className="space-y-1.5"
          lineClassName="font-display text-section-sm md:text-section text-[var(--color-sage)] leading-tight"
          staggerDelay={0.15}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent pointer-events-none" />
    </section>
  );
}

export default Truth;
