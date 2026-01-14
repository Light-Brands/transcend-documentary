'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Truth() {
  return (
    <section
      id="truth"
      className="relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-6 py-32 transition-colors duration-500"
    >
      {/* Scene marker - like a screenplay scene heading */}
      <motion.div
        className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <span className="act-marker">Act I</span>
      </motion.div>

      {/* Main content - voiceover monologue feel */}
      <div className="max-w-4xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.truth.lines}
          className="space-y-3"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-sacred-gold leading-[1.3]"
          staggerDelay={0.25}
        />
      </div>

      {/* Subtle bottom fade for scene transition feel */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent pointer-events-none" />
    </section>
  );
}

export default Truth;
