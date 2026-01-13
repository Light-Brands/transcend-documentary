'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    <Link href={`/episodes/${episode.id}`}>
      <motion.article
        className={cn(
          'group relative bg-gradient-to-br from-ash to-[#1E1E1C] border border-smoke/60 p-6 md:p-8',
          'transition-all duration-500 cursor-pointer h-full',
          'hover:border-sacred-gold/40 hover:shadow-lg hover:shadow-sacred-gold/5',
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
        whileHover={{ y: -6, scale: 1.01 }}
      >
        {/* Gold accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sacred-gold via-ember to-sacred-gold origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Warm glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-sacred-gold/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Episode number & runtime */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-caption-sm uppercase text-sacred-gold/80 tracking-widest">
            {episode.number}
          </span>
          <span className="text-caption-sm text-mist">{episode.runtime}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-light mt-2 mb-4 group-hover:text-sacred-gold transition-colors duration-300">
          {episode.title}
        </h3>

        {/* Theme */}
        <div className="flex items-center gap-2 text-sm text-cloud mb-4">
          <span>{episode.theme}</span>
          <span className="text-sacred-gold">&</span>
          <span>{episode.themeSecondary}</span>
        </div>

        {/* Divider */}
        <motion.div
          className="w-12 h-px bg-smoke mb-4"
          animate={{ width: isHovered ? '3rem' : '3rem', backgroundColor: isHovered ? '#C9A962' : '#2D2D2D' }}
          transition={{ duration: 0.3 }}
        />

        {/* Hook */}
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
          <p className="text-body-sm text-cloud/80 mt-4 pt-4 border-t border-smoke/50">
            {episode.extendedHook}
          </p>
        </motion.div>

        {/* View episode indicator */}
        <motion.div
          className="flex items-center gap-2 mt-4 text-sacred-gold"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="text-sm uppercase tracking-widest">Explore</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </motion.article>
    </Link>
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
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
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
