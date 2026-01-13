'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Episode } from '@/lib/constants';

interface EpisodeCardProps {
  episode: Episode;
  index: number;
  className?: string;
}

export function EpisodeCard({ episode, index, className }: EpisodeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className={cn(
        'group relative bg-ash border border-smoke p-6 md:p-8',
        'transition-colors duration-500',
        'hover:border-mist',
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Gold accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-sacred-gold origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Episode number */}
      <span className="text-caption-sm uppercase text-mist tracking-widest">
        {episode.number}
      </span>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl text-light mt-3 mb-4">
        {episode.title}
      </h3>

      {/* Theme */}
      <div className="flex items-center gap-2 text-sm text-cloud mb-4">
        <span>{episode.theme}</span>
        <span className="text-sacred-gold">&</span>
        <span>{episode.themeSecondary}</span>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-smoke mb-4" />

      {/* Hook - shown on hover (desktop) or always visible (mobile) */}
      <motion.p
        className="text-body-sm text-mist leading-relaxed"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        {episode.hook}
      </motion.p>

      {/* Extended hook on hover */}
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <p className="text-body-sm text-cloud/80 mt-4 pt-4 border-t border-smoke">
          {episode.extendedHook}
        </p>
      </motion.div>
    </motion.article>
  );
}

// Episode card grid container
interface EpisodeGridProps {
  episodes: Episode[];
  className?: string;
}

export function EpisodeGrid({ episodes, className }: EpisodeGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className
      )}
    >
      {episodes.map((episode, index) => (
        <EpisodeCard key={episode.id} episode={episode} index={index} />
      ))}
    </div>
  );
}

export default EpisodeCard;
