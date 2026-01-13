'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';
import { fadeUp, viewportSettings } from '@/lib/animations';

export function Catalyst() {
  return (
    <section
      id="catalyst"
      className="relative bg-ash py-24 md:py-32 lg:py-40"
    >
      {/* First part - Portrait and intro quote */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait placeholder */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-smoke via-ash to-void-black overflow-hidden">
              {/* Ambient glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-3/4 h-3/4 rounded-full bg-ember/10 blur-3xl" />
              </motion.div>

              {/* Placeholder silhouette */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-2/3 h-4/5 bg-gradient-to-t from-void-black via-smoke/50 to-transparent rounded-t-full" />
              </div>

              {/* Side light effect */}
              <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-ember/20 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Quote */}
          <div className="order-1 lg:order-2">
            <LineReveal
              lines={CONTENT.catalyst.intro.lines}
              className="space-y-1"
              lineClassName="font-display italic text-quote-sm md:text-quote text-cloud"
              staggerDelay={0.12}
            />

            {/* Attribution */}
            <motion.p
              className="font-display text-lg md:text-xl text-sacred-gold mt-8"
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

      {/* Second part - Continuation */}
      <div className="max-w-4xl mx-auto px-6 mt-32 md:mt-40 text-center">
        <LineReveal
          lines={CONTENT.catalyst.continuation.lines}
          className="space-y-2"
          lineClassName="font-display text-quote-sm md:text-quote lg:text-quote-lg text-light"
          staggerDelay={0.18}
        />
      </div>
    </section>
  );
}

export default Catalyst;
