'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Truth() {
  return (
    <section
      id="truth"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Background - void to forest gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-forest-deep/20 to-void-black transition-colors duration-500" />

      {/* Subtle ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-sacred-gold/[0.02] via-transparent to-transparent" />
      </motion.div>

      {/* Main content - voiceover monologue feel */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <LineReveal
          lines={CONTENT.truth.lines}
          className="space-y-4"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-sacred-gold leading-[1.3]"
          staggerDelay={0.25}
        />
      </div>

      {/* Subtle bottom fade for scene transition feel */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />
    </section>
  );
}

export default Truth;
