'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Turning() {
  return (
    <section
      id="turning"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      {/* Background gradient that lightens */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-void-black via-ash to-smoke"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.turning.lines}
          className="space-y-2"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-cloud"
          lightLines={[3]} // "We remember who we are." in bright light
          staggerDelay={0.25}
        />
      </div>
    </section>
  );
}

export default Turning;
