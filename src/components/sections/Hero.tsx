'use client';

import { motion } from 'framer-motion';
import { VideoBackground } from '@/components/ui/VideoLoop';
import { CONTENT } from '@/lib/constants';

export function Hero() {
  return (
    <section id="hero" className="relative">
      <VideoBackground overlayOpacity={0.5}>
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          {/* Logo/Title */}
          <motion.h1
            className="font-display text-display-sm md:text-display lg:text-display-lg text-light tracking-[0.15em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {CONTENT.hero.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-display italic text-quote-sm md:text-quote text-cloud/90 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            &ldquo;{CONTENT.hero.tagline}&rdquo;
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <span className="text-caption-sm uppercase text-mist tracking-widest">
              {CONTENT.hero.scrollHint}
            </span>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-sacred-gold to-transparent"
              animate={{
                opacity: [0.4, 1, 0.4],
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  );
}

export default Hero;
