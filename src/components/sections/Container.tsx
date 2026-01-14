'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Container() {
  return (
    <section
      id="container"
      className="relative py-16 md:py-20 overflow-hidden bg-[var(--bg-primary)]"
    >
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Act marker */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="act-marker">Act II</span>
        </motion.div>

        {/* Header */}
        <ScrollReveal className="text-center mb-8">
          <h2 className="font-display text-section-sm md:text-section tracking-[0.08em] text-[var(--text-primary)]">
            {CONTENT.container.header}
          </h2>
        </ScrollReveal>

        {/* Divider */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-10 h-px bg-[var(--border-color)]" />
        </motion.div>

        {/* Description */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <LineReveal
            lines={CONTENT.container.description}
            className="space-y-1.5"
            lineClassName="font-display italic text-quote-sm md:text-quote text-[var(--text-secondary)] leading-relaxed"
            staggerDelay={0.12}
          />
        </div>

        {/* Video placeholder */}
        <ScrollReveal>
          <div className="relative rounded-sm overflow-hidden max-w-4xl mx-auto">
            <VideoLoop
              aspectRatio="cinematic"
              placeholderGradient="from-[var(--bg-tertiary)] to-[var(--bg-primary)]"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-1/3 h-1/2 bg-gradient-radial from-[var(--color-sage-pale)]/30 to-transparent" />
            </div>
          </div>
          <p className="text-center mt-3 font-accent text-[0.5rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Transcend Clinic — Mexico
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Container;
