'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { CONTENT } from '@/lib/constants';

export function Invitation() {
  return (
    <section
      id="invitation"
      className="relative bg-[var(--bg-primary)] py-16 md:py-20"
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* End credits marker */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-[var(--border-color)]" />
            <span className="font-accent text-[0.5rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              End Credits
            </span>
            <div className="w-6 h-px bg-[var(--border-color)]" />
          </div>
        </motion.div>

        {/* Partnership */}
        <div className="text-center">
          <ScrollReveal className="mb-6">
            <h2 className="font-display text-section-sm tracking-[0.1em] uppercase text-[var(--color-sage)]">
              {CONTENT.invitation.header}
            </h2>
          </ScrollReveal>

          <div className="mb-10">
            <LineReveal
              lines={CONTENT.invitation.lines}
              className="space-y-1"
              lineClassName="font-display text-quote-sm md:text-quote text-[var(--text-secondary)] leading-relaxed"
              staggerDelay={0.1}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-16"
          >
            <Button
              variant="secondary"
              size="md"
              href="mailto:hello@transcenddocumentary.com"
            >
              {CONTENT.invitation.cta}
            </Button>
          </motion.div>
        </div>

        {/* Footer credits */}
        <motion.footer
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-8 h-px bg-[var(--border-color)] mx-auto mb-8" />

          <div className="space-y-5">
            <div>
              <span className="font-accent text-[0.5rem] uppercase tracking-[0.12em] text-[var(--text-muted)] block mb-1">
                Presented by
              </span>
              <span className="font-display text-base tracking-[0.06em] text-[var(--text-primary)]">
                {CONTENT.invitation.footer.presented.replace('Presented by ', '')}
              </span>
            </div>

            <div>
              <span className="font-accent text-[0.5rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {CONTENT.invitation.footer.production}
              </span>
            </div>
          </div>

          <p className="font-accent text-[0.45rem] uppercase tracking-[0.1em] text-[var(--text-muted)] opacity-50 mt-10">
            &copy; {new Date().getFullYear()} Transcend Documentary. All rights reserved.
          </p>

          <div className="flex justify-center mt-5">
            <div className="w-1 h-1 rounded-full bg-[var(--color-sage)]/40" />
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

export default Invitation;
