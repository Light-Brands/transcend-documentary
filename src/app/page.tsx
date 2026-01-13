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
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Home() {
  return (
    <main className="relative">
      {/* Theme Toggle - Fixed position */}
      <ThemeToggle className="fixed top-6 right-6 z-50" />

      {/* Dark sections - the descent */}
      <div className="relative bg-[var(--bg-primary)] transition-colors duration-500">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--warmth-4,#1a1915)] pointer-events-none transition-colors duration-500" />

        {/* Section 6: THE JOURNEYS - Episode cards */}
        <Journeys />
      </div>

      {/* Light sections - emergence into warmth */}
      <div className="relative bg-gradient-to-b from-[var(--warmth-4,#1a1915)] via-[var(--warmth-3,#1c1a17)] to-[var(--bg-secondary)] transition-colors duration-500">
        {/* Section 7: THE PROMISE - Unifying question */}
        <Promise />
      </div>

      {/* Return to darkness - the cycle */}
      <div className="relative bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors duration-500">
        {/* Section 8: THE INVITATION - Partnership CTA */}
        <Invitation />
      </div>
    </main>
  );
}
