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
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
    >
      {/* Background - quieter, more serious tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--warmth-1)] transition-colors duration-500" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Act transition marker */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="act-marker">Act II</span>
        </motion.div>

        {/* Section header - restrained, medical credibility */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] text-[var(--text-primary)]">
            {CONTENT.container.header}
          </h2>
        </ScrollReveal>

        {/* Subtle divider */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-16 h-px bg-[var(--border-color)]" />
        </motion.div>

        {/* Poetic description - quieter, more grounded */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.container.description}
            className="space-y-3"
            lineClassName="font-display italic text-lg md:text-quote-sm lg:text-quote text-[var(--text-secondary)] leading-[1.6]"
            staggerDelay={0.18}
          />
        </div>

        {/* Cinematic video placeholder - more restrained */}
        <ScrollReveal>
          <div className="relative rounded-sm overflow-hidden">
            {/* Subtle frame */}
            <div className="absolute -inset-px border border-[var(--border-color)] opacity-50 rounded-sm pointer-events-none z-10" />

            <VideoLoop
              aspectRatio="cinematic"
              placeholderGradient="from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]"
              className="w-full"
              overlayClassName="from-[var(--bg-primary)]/70 via-transparent to-[var(--bg-primary)]/70"
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
                {/* Subtle warm light elements - not flames, more like ambient glow */}
                <motion.div
                  className="w-1 h-16 bg-gradient-to-t from-ember/40 via-sacred-gold/20 to-transparent rounded-full"
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
                  className="w-1 h-20 bg-gradient-to-t from-sacred-gold/40 via-ember/20 to-transparent rounded-full"
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
                  className="w-1 h-14 bg-gradient-to-t from-ember/40 via-sacred-gold/20 to-transparent rounded-full"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-sacred-gold/[0.06] via-ember/[0.03] to-transparent" />
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
            <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-70">
              Transcend Clinic — Mexico
            </span>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Container;
