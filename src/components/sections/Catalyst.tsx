'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Catalyst() {
  return (
    <section
      id="catalyst"
      className="relative bg-[var(--bg-secondary)] py-16 md:py-20"
    >
      {/* Chapter marker */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-accent text-[0.55rem] tracking-[0.15em] uppercase text-[var(--color-sage)]">
          The Pilot Episode
        </span>
      </motion.div>

      {/* Portrait and quote */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Portrait */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-2/3 h-4/5 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-tertiary)]/50 to-transparent rounded-t-full" />
                </div>
                <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[var(--color-sage-pale)]/20 to-transparent" />
              </div>
              <p className="mt-3 text-center font-accent text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Nicholas — The Catalyst
              </p>
            </div>
          </ScrollReveal>

          {/* Quote */}
          <div className="order-1 lg:order-2">
            <LineReveal
              lines={CONTENT.catalyst.intro.lines}
              className="space-y-0.5"
              lineClassName="font-display italic text-quote-sm md:text-quote text-[var(--text-secondary)] leading-relaxed"
              staggerDelay={0.1}
            />
            <motion.p
              className="font-display text-base text-[var(--color-sage)] mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {CONTENT.catalyst.intro.attribution}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className="max-w-[120px] mx-auto my-14"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="scene-divider" />
      </motion.div>

      {/* Continuation */}
      <div className="max-w-2xl mx-auto px-6 text-center">
        <LineReveal
          lines={CONTENT.catalyst.continuation.lines}
          className="space-y-1"
          lineClassName="font-display text-quote-sm md:text-quote text-[var(--text-primary)] leading-relaxed"
          staggerDelay={0.12}
        />
      </div>
    </section>
  );
}

export default Catalyst;
