'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { CONTENT } from '@/lib/constants';
import { fadeUp, viewportSettings } from '@/lib/animations';

export function Invitation() {
  return (
    <section
      id="invitation"
      className="relative bg-void-black py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section header */}
        <ScrollReveal className="mb-12">
          <span className="text-caption uppercase text-sacred-gold tracking-[0.25em]">
            {CONTENT.invitation.header}
          </span>
        </ScrollReveal>

        {/* Statement */}
        <div className="mb-16">
          <LineReveal
            lines={CONTENT.invitation.lines}
            className="space-y-2"
            lineClassName="font-display text-quote-sm md:text-quote text-cloud"
            staggerDelay={0.15}
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-24"
        >
          <Button
            variant="primary"
            size="lg"
            href="mailto:hello@transcenddocumentary.com"
          >
            {CONTENT.invitation.cta}
          </Button>
        </motion.div>

        {/* Footer credits */}
        <motion.footer
          className="pt-16 border-t border-smoke"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="space-y-3">
            <p className="text-body-sm text-mist">
              {CONTENT.invitation.footer.presented}
            </p>
            <p className="text-caption uppercase text-smoke tracking-widest">
              {CONTENT.invitation.footer.production}
            </p>
          </div>

          {/* Copyright */}
          <p className="text-caption-sm text-smoke/60 mt-12">
            &copy; {new Date().getFullYear()} Transcend Documentary. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

export default Invitation;
