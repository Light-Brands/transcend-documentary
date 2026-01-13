'use client';

import { motion } from 'framer-motion';
import { LineReveal } from '@/components/ui/ScrollReveal';
import { VideoLoop } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';
import { viewportSettings } from '@/lib/animations';

export function Promise() {
  return (
    <section
      id="promise"
      className="relative bg-ash py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Central question */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <LineReveal
            lines={CONTENT.promise.lines}
            className="space-y-2"
            lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-light"
            staggerDelay={0.2}
          />
        </div>

        {/* Cinematic video - moment of turning */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <VideoLoop
            aspectRatio="cinematic"
            placeholderGradient="from-void-black via-smoke to-ash"
            className="w-full"
          />

          {/* Light reveal effect overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportSettings}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            {/* Radial light effect */}
            <motion.div
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-ember/20 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Silhouette placeholder */}
          <div className="absolute inset-0 flex items-end justify-center">
            <motion.div
              className="w-1/4 h-3/4 bg-gradient-to-t from-void-black via-void-black/80 to-transparent"
              style={{
                clipPath: 'ellipse(50% 100% at 50% 100%)',
              }}
              animate={{
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Promise;
