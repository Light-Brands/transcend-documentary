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

      {/* Section 6: THE JOURNEYS - Episode cards */}
      <Journeys />

      {/* Section 7: THE PROMISE - Unifying question */}
      <Promise />

      {/* Section 8: THE INVITATION - Partnership CTA */}
      <Invitation />
    </main>
  );
}
