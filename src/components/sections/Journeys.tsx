'use client';

import { ScrollReveal, LineReveal } from '@/components/ui/ScrollReveal';
import { EpisodeGrid } from '@/components/ui/EpisodeCard';
import { CONTENT, EPISODES } from '@/lib/constants';

export function Journeys() {
  return (
    <section
      id="journeys"
      className="relative bg-void-black py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-8">
          <span className="text-caption uppercase text-sacred-gold tracking-[0.2em]">
            {CONTENT.journeys.header}
          </span>
        </ScrollReveal>

        {/* Intro text */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <LineReveal
            lines={CONTENT.journeys.intro}
            className="space-y-2"
            lineClassName="font-display text-section-sm md:text-section text-cloud"
            staggerDelay={0.15}
          />
        </div>

        {/* Episode cards grid */}
        <EpisodeGrid episodes={EPISODES} />
      </div>
    </section>
  );
}

export default Journeys;
