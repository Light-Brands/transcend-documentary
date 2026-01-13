'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';
import { fadeUp, viewportSettings } from '@/lib/animations';

export function Container() {
  return (
    <section
      id="container"
      className="relative bg-void-black py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-caption uppercase text-mist tracking-[0.2em]">
            {CONTENT.container.header}
          </span>
        </ScrollReveal>

        {/* Poetic description */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <LineReveal
            lines={CONTENT.container.description}
            className="space-y-2"
            lineClassName="font-display italic text-quote-sm md:text-quote text-cloud"
            staggerDelay={0.15}
          />
        </div>

        {/* Cinematic video placeholder */}
        <ScrollReveal>
          <div className="relative">
            <VideoLoop
              aspectRatio="cinematic"
              placeholderGradient="from-smoke via-ash to-void-black"
              className="w-full"
              overlayClassName="from-void-black/80 via-void-black/40 to-void-black/80"
            />

            {/* Decorative elements within placeholder */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportSettings}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Warm light representations */}
                <motion.div
                  className="w-2 h-24 bg-gradient-to-t from-ember/60 to-transparent rounded-full"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    height: ['6rem', '7rem', '6rem'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="w-2 h-32 bg-gradient-to-t from-sacred-gold/60 to-transparent rounded-full"
                  animate={{
                    opacity: [0.5, 0.9, 0.5],
                    height: ['8rem', '9rem', '8rem'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="w-2 h-20 bg-gradient-to-t from-ember/60 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    height: ['5rem', '6rem', '5rem'],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Container;
