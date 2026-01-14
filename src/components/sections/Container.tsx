'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';
import { viewportSettings } from '@/lib/animations';

export function Container() {
  return (
    <section
      id="container"
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background - deep, serious tone with forest undertones */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-forest-deep/30 to-warmth-1 transition-colors duration-500" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Act transition marker */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-accent text-[0.6rem] md:text-xs tracking-[0.3em] uppercase text-mist/50">
            {CONTENT.container.actLabel}
          </span>
        </motion.div>

        {/* Section header */}
        <ScrollReveal className="text-center mb-6 md:mb-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] text-sacred-gold">
            {CONTENT.container.header}
          </h2>
        </ScrollReveal>

        {/* Tagline - "Every story passes through a place" */}
        <motion.p
          className="text-center font-display italic text-lg md:text-xl text-mist/70 mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {CONTENT.container.tagline}
        </motion.p>

        {/* Subtle divider */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-16 h-px bg-smoke/40" />
        </motion.div>

        {/* Poetic description */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.container.description}
            className="space-y-3"
            lineClassName="font-display italic text-lg md:text-quote-sm lg:text-quote text-bone/70 leading-[1.6]"
            staggerDelay={0.18}
          />
        </div>

        {/* Cinematic video placeholder */}
        <ScrollReveal>
          <div className="relative rounded-sm overflow-hidden">
            {/* Subtle frame */}
            <div className="absolute -inset-px border border-smoke/30 rounded-sm pointer-events-none z-10" />

            <VideoLoop
              aspectRatio="cinematic"
              placeholderGradient="from-forest-deep via-shadow-blue-deep to-void-black"
              className="w-full"
              overlayClassName="from-void-black/70 via-transparent to-void-black/70"
            />

            {/* Quieter decorative elements - soft ambient light */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportSettings}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                {/* Subtle warm light elements */}
                <motion.div
                  className="w-1 h-16 bg-gradient-to-t from-ember/30 via-muted-gold/15 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="w-1 h-20 bg-gradient-to-t from-muted-gold/30 via-ember/15 to-transparent rounded-full"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="w-1 h-14 bg-gradient-to-t from-ember/30 via-muted-gold/15 to-transparent rounded-full"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>

            {/* Very subtle warm ambient glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-muted-gold/[0.04] via-ember/[0.02] to-transparent" />
            </motion.div>
          </div>

          {/* Video caption - documentary style */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-mist/50">
              Transcend Clinic — Mexico
            </span>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Container;
