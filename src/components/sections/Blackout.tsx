'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CONTENT } from '@/lib/constants';

export function Blackout() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Text opacity - appears as you scroll into view, then fades
  const textOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );

  // Subtle scale effect
  const textScale = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0.95, 1, 0.95]
  );

  return (
    <section
      ref={containerRef}
      id="blackout"
      className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center bg-obsidian overflow-hidden"
    >
      {/* Pure black background - the void */}
      <div className="absolute inset-0 bg-void-black" />

      {/* The single, devastating line */}
      <motion.div
        className="relative z-10 px-6 text-center"
        style={{
          opacity: textOpacity,
          scale: textScale,
        }}
      >
        <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-bone/80 tracking-[0.1em] md:tracking-[0.15em] leading-relaxed max-w-3xl">
          {CONTENT.blackout.line}
        </p>
      </motion.div>

      {/* Very subtle ambient pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-shadow-blue-deep/10 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Top and bottom gradients for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-void-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent pointer-events-none" />
    </section>
  );
}

export default Blackout;
