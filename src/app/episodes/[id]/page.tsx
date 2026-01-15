'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { EPISODES } from '@/lib/constants';

export default function EpisodePage() {
  const params = useParams();
  const episodeId = params.id as string;

  const episode = EPISODES.find((ep) => ep.id === episodeId);
  const currentIndex = EPISODES.findIndex((ep) => ep.id === episodeId);
  const prevEpisode = currentIndex > 0 ? EPISODES[currentIndex - 1] : null;
  const nextEpisode = currentIndex < EPISODES.length - 1 ? EPISODES[currentIndex + 1] : null;

  if (!episode) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-[var(--text-primary)] mb-4">Episode Not Found</h1>
          <Link href="/" className="text-sacred-gold-text hover:text-[var(--text-primary)] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="relative z-50 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Back link */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xs sm:text-sm uppercase tracking-[0.15em]">Back</span>
            </Link>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Clinic_Small.png"
                alt="Transcend Clinic Logo"
                width={100}
                height={50}
                className="h-auto w-auto max-h-10 md:max-h-12"
                priority
              />
            </Link>

            {/* Episode indicator */}
            <span className="text-xs sm:text-sm tracking-[0.15em] text-[var(--text-muted)] uppercase">
              {episode.number}
            </span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Episode metadata */}
          <motion.div
            className="flex items-center gap-3 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-sacred-gold-text uppercase font-medium">
              {episode.number}
            </span>
            <div className="w-8 sm:w-12 h-[1px] bg-[var(--border-color)]" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">
              {episode.theme} / {episode.themeSecondary}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-[var(--text-primary)] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {episode.title}
          </motion.h1>

          {/* Hook */}
          <motion.p
            className="font-display text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] italic max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {episode.hook}
          </motion.p>

          {/* Runtime */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-xs sm:text-sm text-[var(--text-muted)]">
              Runtime: {episode.runtime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-sacred-gold/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>

      {/* Synopsis section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.span
              className="text-[10px] sm:text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase mb-8 sm:mb-10 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Synopsis
            </motion.span>

            <div className="space-y-6 sm:space-y-8">
              {episode.synopsis.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="font-body text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.blockquote
            className="max-w-3xl pl-6 sm:pl-8 border-l-2 border-sacred-gold/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-sacred-gold-text italic leading-relaxed">
              "{episode.pullQuote}"
            </p>
            {episode.quoteAttribution && (
              <footer className="mt-4 sm:mt-6 text-sm text-[var(--text-muted)]">
                — {episode.quoteAttribution}
              </footer>
            )}
          </motion.blockquote>
        </div>
      </section>

      {/* Themes section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.span
            className="text-[10px] sm:text-xs tracking-[0.25em] text-[var(--text-muted)] uppercase mb-6 sm:mb-8 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Themes Explored
          </motion.span>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {episode.themes.map((theme, index) => (
              <motion.span
                key={theme}
                className="text-[10px] sm:text-xs tracking-wider text-[var(--text-muted)] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border border-[var(--border-color)] rounded-full hover:border-sacred-gold-text hover:text-sacred-gold-text transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {theme}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Episode navigation */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Previous episode */}
            <div>
              {prevEpisode ? (
                <Link href={`/episodes/${prevEpisode.id}`} className="group block">
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mb-3 block">
                    Previous
                  </span>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-sacred-gold-text transform group-hover:-translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-display text-lg sm:text-xl text-[var(--text-primary)] group-hover:text-sacred-gold-text transition-colors duration-300">
                      {prevEpisode.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="opacity-40">
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mb-3 block">
                    Previous
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">First episode</span>
                </div>
              )}
            </div>

            {/* Next episode */}
            <div className="md:text-right">
              {nextEpisode ? (
                <Link href={`/episodes/${nextEpisode.id}`} className="group block">
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mb-3 block">
                    Next
                  </span>
                  <div className="flex items-center md:justify-end gap-3">
                    <span className="font-display text-lg sm:text-xl text-[var(--text-primary)] group-hover:text-sacred-gold-text transition-colors duration-300">
                      {nextEpisode.title}
                    </span>
                    <svg
                      className="w-4 h-4 text-sacred-gold-text transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="opacity-40">
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase mb-3 block">
                    Next
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">Last episode</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mb-4 sm:mb-6">
              Continue the Journey
            </h2>
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] mb-8 sm:mb-10">
              Explore more stories of transformation and discover what happens when we stop running.
            </p>
            <Link
              href="/"
              className="
                inline-block px-6 sm:px-8 py-3 sm:py-4
                border border-sacred-gold text-sacred-gold-text
                font-accent text-xs sm:text-sm tracking-[0.15em] uppercase
                transition-all duration-300
                hover:bg-sacred-gold hover:text-white
              "
            >
              View All Episodes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/Clinic_Small.png"
                alt="Transcend Clinic Logo"
                width={80}
                height={40}
                className="h-auto w-auto max-h-8"
              />
            </Link>
            <p className="text-[10px] sm:text-xs text-[var(--text-muted)] tracking-wider">
              © {new Date().getFullYear()} Transcend Documentary. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
