'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Promise() {
  return (
    <section
      id="promise"
      className="relative py-16 md:py-20 overflow-hidden bg-[var(--bg-secondary)]"
    >
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Scene marker */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="act-marker">Act III</span>
        </motion.div>

        {/* Central question */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <LineReveal
            lines={CONTENT.promise.lines}
            className="space-y-1.5"
            lineClassName="font-display text-section-sm md:text-section text-[var(--text-primary)] leading-tight"
            staggerDelay={0.15}
          />
        </div>

        {/* Video */}
        <motion.div
          className="relative rounded-sm overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <VideoLoop
            aspectRatio="cinematic"
            placeholderGradient="from-[var(--bg-tertiary)] to-[var(--bg-primary)]"
            className="w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[var(--color-sage-pale)]/20 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
            <div
              className="w-1/6 h-1/2 bg-gradient-to-t from-[var(--bg-primary)] to-transparent"
              style={{ clipPath: 'ellipse(50% 100% at 50% 100%)' }}
            />
          </div>
        </motion.div>
        <p className="text-center mt-3 font-accent text-[0.5rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
          The Turning
        </p>
      </div>
    </section>
  );
}

export default Promise;
