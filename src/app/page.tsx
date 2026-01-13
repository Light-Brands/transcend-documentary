import {
  Hero,
  Truth,
  Turning,
  Catalyst,
  Container,
  Journeys,
  Promise,
  Invitation,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="relative">
      {/* Dark sections - the descent */}
      <div className="relative bg-void-black">
        {/* Section 1: THE THRESHOLD - Hero */}
        <Hero />

        {/* Section 2: THE TRUTH - Dark statement */}
        <Truth />

        {/* Section 3: THE TURNING - Shift and possibility */}
        <Turning />

        {/* Section 4: THE CATALYST - Nicholas's story */}
        <Catalyst />

        {/* Section 5: THE CONTAINER - Transcend Clinic */}
        <Container />
      </div>

      {/* Transition zone - emergence from darkness */}
      <div className="relative">
        {/* Gradient overlay for smooth dark-to-light transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-black via-ash to-[#1a1915] pointer-events-none" />

        {/* Section 6: THE JOURNEYS - Episode cards */}
        <Journeys />
      </div>

      {/* Light sections - emergence into warmth */}
      <div className="relative bg-gradient-to-b from-[#1a1915] via-[#1c1a17] to-ash">
        {/* Section 7: THE PROMISE - Unifying question */}
        <Promise />
      </div>

      {/* Return to darkness - the cycle */}
      <div className="relative bg-gradient-to-b from-ash to-void-black">
        {/* Section 8: THE INVITATION - Partnership CTA */}
        <Invitation />
      </div>
    </main>
  );
}
