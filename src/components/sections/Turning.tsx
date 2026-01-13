'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Turning() {
  return (
    <section
      id="turning"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[var(--bg-secondary)] transition-colors duration-500"
    >
      {/* Background gradient that creates depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)] transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.turning.lines}
          className="space-y-2"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-[var(--text-secondary)]"
          lightLines={[3]} // "We remember who we are." in bright light
          staggerDelay={0.25}
        />
      </div>
    </section>
  );
}

export default Turning;
