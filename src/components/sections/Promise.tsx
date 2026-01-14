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
      {/* Dark forest green to shadow blue gradient - night-before-revelation */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-shadow-blue-deep to-void-black transition-colors duration-500" />

      {/* Very subtle ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-sacred-gold/[0.02] via-ember/[0.01] to-transparent" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Act marker - ACT IV RETURN */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-mist/50">
            {CONTENT.promise.actLabel}
          </span>
        </motion.div>

        {/* Central words - Integration, Shadow, Wholeness, Responsibility */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.promise.lines}
            className="space-y-6 md:space-y-8"
            lineClassName="font-display text-2xl md:text-section-sm lg:text-section text-bone/90 leading-[1.3] tracking-wide"
            staggerDelay={0.3}
          />
        </div>

        {/* Cinematic video - the moment of integration */}
        <motion.div
          className="relative rounded-sm overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {/* Subtle frame */}
          <div className="absolute -inset-px border border-smoke/30 rounded-sm pointer-events-none z-10" />

          <VideoLoop
            aspectRatio="cinematic"
            placeholderGradient="from-shadow-blue-deep via-forest-deep to-void-black"
            className="w-full"
          />

          {/* Integration light effect - shadow becoming whole */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportSettings}
            transition={{ delay: 1, duration: 2 }}
          >
            <motion.div
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-muted-gold/10 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Silhouette - integration moment */}
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.div
              className="w-1/5 h-2/3 bg-gradient-to-t from-void-black via-void-black/70 to-transparent"
              style={{
                clipPath: 'ellipse(50% 100% at 50% 100%)',
              }}
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Subtle golden hour light */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-sacred-gold/[0.02] via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </motion.div>

        {/* Video caption */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="font-accent text-[0.55rem] uppercase tracking-[0.2em] text-mist/40">
            Integration
          </span>
        </motion.div>

        {/* Closing line - the mandate */}
        <motion.div
          className="text-center mt-20 md:mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-sacred-gold tracking-[0.1em] md:tracking-[0.15em]">
            {CONTENT.promise.closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Promise;
