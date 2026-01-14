'use client';

import { motion } from 'framer-motion';
import { CONTENT } from '@/lib/constants';

export function Dissonance() {
  return (
    <section
      id="dissonance"
      className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian px-6 py-32 overflow-hidden"
    >
      {/* Subtle ambient glow - forest green undertone */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-forest-deep/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-shadow-blue-deep/20 to-transparent" />
      </motion.div>

      {/* Act marker */}
      <motion.div
        className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-mist/50">
          {CONTENT.dissonance.actLabel}
        </span>
      </motion.div>

      {/* Main content - heavy spacing, emotional weight */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {CONTENT.dissonance.lines.map((line, index) => {
          // Empty lines create extra spacing
          if (line === '') {
            return <div key={index} className="h-12 md:h-16" />;
          }

          return (
            <motion.p
              key={index}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-bone/90 leading-[1.2] tracking-wide mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {line}
            </motion.p>
          );
        })}
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />
    </section>
  );
}

export default Dissonance;
