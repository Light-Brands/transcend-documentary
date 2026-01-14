'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';
import { viewportSettings } from '@/lib/animations';

export function Catalyst() {
  return (
    <section
      id="catalyst"
      className="relative bg-[var(--bg-secondary)] py-32 md:py-40 lg:py-48 transition-colors duration-500"
    >
      {/* Chapter marker - like a film chapter card */}
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-accent text-[0.65rem] tracking-[0.25em] uppercase text-sacred-gold/70">
          The Pilot Episode
        </span>
      </motion.div>

      {/* First part - Portrait and intro quote */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait placeholder - cinematic frame */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative">
              {/* Frame border - film still aesthetic */}
              <div className="absolute -inset-3 border border-[var(--border-color)] opacity-30" />

              <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] overflow-hidden transition-colors duration-500">
                {/* Ambient glow effect */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-3/4 h-3/4 rounded-full bg-ember/10 blur-3xl" />
                </motion.div>

                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-2/3 h-4/5 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-tertiary)]/50 to-transparent rounded-t-full transition-colors duration-500" />
                </div>

                {/* Side light effect - like interview lighting */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ember/15 to-transparent" />

                {/* Film grain hint */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence baseFrequency=%220.9%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
              </div>

              {/* Caption below portrait - documentary style */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportSettings}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Nicholas — The Catalyst
                </span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Quote - intimate interview feel */}
          <div className="order-1 lg:order-2">
            <LineReveal
              lines={CONTENT.catalyst.intro.lines}
              className="space-y-1"
              lineClassName="font-display italic text-quote-sm md:text-quote text-[var(--text-secondary)] leading-[1.5]"
              staggerDelay={0.12}
            />

            {/* Attribution */}
            <motion.p
              className="font-display text-lg md:text-xl text-sacred-gold mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportSettings}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {CONTENT.catalyst.intro.attribution}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scene divider */}
      <motion.div
        className="max-w-xs mx-auto my-24 md:my-32"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="scene-divider" />
      </motion.div>

      {/* Second part - Continuation (the calling) */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <LineReveal
          lines={CONTENT.catalyst.continuation.lines}
          className="space-y-2"
          lineClassName="font-display text-quote-sm md:text-quote lg:text-quote-lg text-[var(--text-primary)] leading-[1.4]"
          staggerDelay={0.2}
        />
      </div>
    </section>
  );
}

export default Catalyst;
