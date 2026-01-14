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
          'group relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-sm',
          'transition-all duration-500 cursor-pointer h-full',
          'hover:border-sacred-gold/30',
          className
        )}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
      >
        {/* Top accent line - like a film slate marker */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-sacred-gold origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Subtle warm glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-sacred-gold/[0.03] to-transparent pointer-events-none rounded-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Card content */}
        <div className="p-6 md:p-8">
          {/* Episode marker - festival style */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-accent text-[0.6rem] uppercase tracking-[0.2em] text-sacred-gold/70">
              {episode.number}
            </span>
            <span className="font-accent text-[0.55rem] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              {episode.runtime}
            </span>
          </div>

          {/* Title - like a chapter card */}
          <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] mb-3 group-hover:text-sacred-gold transition-colors duration-300 tracking-wide">
            {episode.title}
          </h3>

          {/* Themes - subtle */}
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-5">
            <span>{episode.theme}</span>
            <span className="text-sacred-gold/50">/</span>
            <span>{episode.themeSecondary}</span>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-[var(--border-color)] mb-5 transition-all duration-300 group-hover:bg-sacred-gold/40 group-hover:w-12" />

          {/* Hook - the logline */}
          <p className="text-body-sm text-[var(--text-secondary)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {episode.hook}
          </p>

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
            <p className="text-body-sm text-[var(--text-muted)] mt-4 pt-4 border-t border-[var(--border-color)]">
              {episode.extendedHook}
            </p>
          </motion.div>

          {/* Explore indicator - restrained */}
          <motion.div
            className="flex items-center gap-2 mt-5 text-sacred-gold"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="font-accent text-[0.55rem] uppercase tracking-[0.2em]">Explore</span>
            <svg
              className="w-3.5 h-3.5"
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
        </div>
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
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6',
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
