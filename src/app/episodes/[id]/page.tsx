'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EPISODES } from '@/lib/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function EpisodePage() {
  const params = useParams();
  const router = useRouter();
  const episodeId = params.id as string;

  const episode = EPISODES.find((ep) => ep.id === episodeId);
  const currentIndex = EPISODES.findIndex((ep) => ep.id === episodeId);
  const prevEpisode = currentIndex > 0 ? EPISODES[currentIndex - 1] : null;
  const nextEpisode = currentIndex < EPISODES.length - 1 ? EPISODES[currentIndex + 1] : null;

  if (!episode) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center transition-colors duration-500">
        <ThemeToggle className="fixed top-6 right-6 z-50" />
        <div className="text-center">
          <h1 className="font-display text-4xl text-[var(--text-primary)] mb-4">Episode Not Found</h1>
          <Link href="/#journeys" className="text-sacred-gold hover:underline">
            Return to Episodes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Theme Toggle */}
      <ThemeToggle className="fixed top-6 right-6 z-50" />

      {/* Back navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-sm transition-colors duration-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/#journeys"
            className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm uppercase tracking-widest">Back to Episodes</span>
          </Link>
          <Link href="/" className="font-display text-xl text-[var(--text-primary)] hover:text-sacred-gold transition-colors">
            Transcend
          </Link>
        </div>
      </motion.nav>

      {/* Hero section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)] transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          {/* Episode number */}
          <motion.span
            className="inline-block text-caption-sm uppercase text-sacred-gold tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {episode.number}
          </motion.span>

          {/* Title */}
          <motion.h1
            className="font-display text-display-sm md:text-display text-[var(--text-primary)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {episode.title}
          </motion.h1>

          {/* Themes */}
          <motion.div
            className="flex items-center gap-3 mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-lg text-[var(--text-secondary)]">{episode.theme}</span>
            <span className="text-sacred-gold text-xl">&</span>
            <span className="text-lg text-[var(--text-secondary)]">{episode.themeSecondary}</span>
            <span className="mx-4 h-px w-12 bg-[var(--border-color)]" />
            <span className="text-[var(--text-muted)]">{episode.runtime}</span>
          </motion.div>

          {/* Hook */}
          <motion.p
            className="text-quote text-[var(--text-secondary)]/90 font-display italic max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {episode.hook}
          </motion.p>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-5xl mx-auto px-6 bg-[var(--bg-tertiary)] transition-colors duration-500">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-sacred-gold/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Synopsis section */}
      <section className="py-20 px-6 bg-[var(--bg-tertiary)] transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-caption uppercase text-[var(--text-muted)] tracking-[0.2em] mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Synopsis
          </motion.h2>

          <div className="space-y-8">
            {episode.synopsis.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-body-lg text-[var(--text-secondary)] leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)] transition-colors duration-500">
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-sacred-gold via-sacred-gold/50 to-transparent" />
          <blockquote className="pl-8 md:pl-12">
            <p className="font-display text-quote-lg md:text-section-sm text-[var(--text-primary)] italic leading-relaxed">
              "{episode.pullQuote}"
            </p>
            {episode.quoteAttribution && (
              <footer className="mt-6 text-[var(--text-muted)]">
                <span className="text-sacred-gold">—</span> {episode.quoteAttribution}
              </footer>
            )}
          </blockquote>
        </motion.div>
      </section>

      {/* Themes section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)] transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-caption uppercase text-[var(--text-muted)] tracking-[0.2em] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Themes Explored
          </motion.h2>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {episode.themes.map((theme, index) => (
              <motion.span
                key={theme}
                className="px-4 py-2 border border-[var(--border-color)] text-sm text-[var(--text-secondary)] hover:border-sacred-gold hover:text-sacred-gold transition-colors duration-300"
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
      <section className="py-20 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous episode */}
            <div>
              {prevEpisode ? (
                <Link href={`/episodes/${prevEpisode.id}`} className="group block">
                  <span className="text-caption-sm uppercase text-[var(--text-muted)] tracking-widest mb-2 block">
                    Previous Episode
                  </span>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-sacred-gold transform group-hover:-translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-display text-xl text-[var(--text-primary)] group-hover:text-sacred-gold transition-colors duration-300">
                      {prevEpisode.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="opacity-30">
                  <span className="text-caption-sm uppercase text-[var(--text-muted)] tracking-widest mb-2 block">
                    Previous Episode
                  </span>
                  <span className="text-[var(--text-muted)]">This is the first episode</span>
                </div>
              )}
            </div>

            {/* Next episode */}
            <div className="text-right">
              {nextEpisode ? (
                <Link href={`/episodes/${nextEpisode.id}`} className="group block">
                  <span className="text-caption-sm uppercase text-[var(--text-muted)] tracking-widest mb-2 block">
                    Next Episode
                  </span>
                  <div className="flex items-center justify-end gap-3">
                    <span className="font-display text-xl text-[var(--text-primary)] group-hover:text-sacred-gold transition-colors duration-300">
                      {nextEpisode.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-sacred-gold transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="opacity-30">
                  <span className="text-caption-sm uppercase text-[var(--text-muted)] tracking-widest mb-2 block">
                    Next Episode
                  </span>
                  <span className="text-[var(--text-muted)]">This is the last episode</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] transition-colors duration-500">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-section-sm md:text-section text-[var(--text-primary)] mb-6">
            Ready to Continue the Journey?
          </h2>
          <p className="text-[var(--text-secondary)] mb-10">
            Explore more stories of transformation and discover what happens when we stop running.
          </p>
          <Link
            href="/#journeys"
            className="inline-flex items-center justify-center px-8 py-4 bg-sacred-gold text-[var(--bg-primary)] font-body text-sm uppercase tracking-widest hover:bg-transparent hover:text-sacred-gold border border-sacred-gold transition-all duration-300"
          >
            View All Episodes
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
