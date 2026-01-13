'use client';

import { LineReveal } from '@/components/ui/ScrollReveal';
import { CONTENT } from '@/lib/constants';

export function Truth() {
  return (
    <section
      id="truth"
      className="relative min-h-screen flex items-center justify-center bg-void-black px-6 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <LineReveal
          lines={CONTENT.truth.lines}
          className="space-y-2"
          lineClassName="font-display text-section-sm md:text-section lg:text-section-lg text-sacred-gold"
          staggerDelay={0.2}
        />
      </div>
    </section>
  );
}

export default Truth;
