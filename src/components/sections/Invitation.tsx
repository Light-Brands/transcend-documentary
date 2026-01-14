'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { CONTENT } from '@/lib/constants';
import { viewportSettings } from '@/lib/animations';

export function Invitation() {
  return (
    <section
      id="invitation"
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black via-ash to-void-black transition-colors duration-500" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Scene marker - like end credits beginning */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-smoke/40" />
            <span className="font-accent text-[0.55rem] uppercase tracking-[0.25em] text-mist/50">
              End Credits
            </span>
            <div className="w-8 h-px bg-smoke/40" />
          </div>
        </motion.div>

        {/* Partnership section - invitation not pitch */}
        <div className="text-center">
          <ScrollReveal className="mb-10">
            <h2 className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-sacred-gold">
              {CONTENT.invitation.header}
            </h2>
          </ScrollReveal>

          {/* Statement - calm, serious */}
          <div className="mb-14 md:mb-16">
            <LineReveal
              lines={CONTENT.invitation.lines}
              className="space-y-2"
              lineClassName="font-display text-lg md:text-quote-sm lg:text-quote text-bone/70 leading-[1.5]"
              staggerDelay={0.18}
            />
          </div>

          {/* CTA - ceremonial, not shouty */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-20 md:mb-24"
          >
            <Button
              variant="secondary"
              size="lg"
              href="mailto:hello@transcenddocumentary.com"
            >
              {CONTENT.invitation.cta}
            </Button>
          </motion.div>

          {/* Ecosystem signal - subtle but important */}
          <motion.div
            className="mb-20 md:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <p className="font-body text-sm md:text-base text-mist/40 leading-relaxed max-w-2xl mx-auto italic">
              {CONTENT.ecosystem.line}
            </p>
          </motion.div>
        </div>

        {/* Footer - like closing credits */}
        <motion.footer
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ delay: 1, duration: 1.2 }}
        >
          {/* Divider */}
          <div className="w-12 h-px bg-smoke/30 mx-auto mb-12" />

          {/* Credits block - film credit style */}
          <div className="space-y-8">
            {/* Presented by */}
            <div>
              <span className="font-accent text-[0.55rem] uppercase tracking-[0.2em] text-mist/40 block mb-2">
                Presented by
              </span>
              <span className="font-display text-lg md:text-xl tracking-[0.1em] text-bone/80">
                {CONTENT.invitation.footer.presented}
              </span>
            </div>

            {/* Production credit */}
            <div>
              <span className="font-accent text-[0.55rem] uppercase tracking-[0.15em] text-mist/40">
                {CONTENT.invitation.footer.production}
              </span>
            </div>
          </div>

          {/* Copyright - quiet, subtle */}
          <motion.p
            className="font-accent text-[0.5rem] uppercase tracking-[0.15em] text-mist/30 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            &copy; {new Date().getFullYear()} Transcend Documentary. All rights reserved.
          </motion.p>

          {/* Final flourish - like end of credits marker */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="w-1 h-1 rounded-full bg-muted-gold/30" />
          </motion.div>
        </motion.footer>
      </div>
    </section>
  );
}

export default Invitation;
