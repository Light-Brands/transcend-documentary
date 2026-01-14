'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';
import { viewportSettings } from '@/lib/animations';

export function Promise() {
  return (
    <section
      id="promise"
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Warm ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--warmth-3,#1a1815)] via-[var(--warmth-4,#1c1916)] to-[var(--bg-secondary)] transition-colors duration-500" />

      {/* Very subtle warm glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-sacred-gold/[0.03] via-ember/[0.015] to-transparent" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Scene marker */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="act-marker">Act III</span>
        </motion.div>

        {/* Central question - the thematic heart */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.promise.lines}
            className="space-y-4"
            lineClassName="font-display text-lg md:text-section-sm lg:text-section text-[var(--text-primary)] leading-[1.4]"
            staggerDelay={0.25}
          />
        </div>

        {/* Cinematic video - the moment of turning */}
        <motion.div
          className="relative rounded-sm overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {/* Subtle frame */}
          <div className="absolute -inset-px border border-[var(--border-color)] opacity-40 rounded-sm pointer-events-none z-10" />

          <VideoLoop
            aspectRatio="cinematic"
            placeholderGradient="from-[var(--bg-primary)] via-[var(--warmth-2,#1a1510)] to-[var(--bg-secondary)]"
            className="w-full"
          />

          {/* Soft warm light reveal */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportSettings}
            transition={{ delay: 1, duration: 2 }}
          >
            <motion.div
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-ember/15 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Subtle golden hour light */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-sacred-gold/[0.03] via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
          />

          {/* Silhouette - the turning figure */}
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.div
              className="w-1/5 h-2/3 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent"
              style={{
                clipPath: 'ellipse(50% 100% at 50% 100%)',
              }}
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Video caption */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="font-accent text-[0.55rem] uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-60">
            The Turning
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Promise;
