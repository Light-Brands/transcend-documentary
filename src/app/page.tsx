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
import { Header } from '@/components/ui';

export default function Home() {
  return (
    <>
      {/* Cinematic Header with sticky navigation */}
      <Header />

      <main className="relative">
        {/* ACT I: THE DESCENT */}
        {/* Opening scene - title card */}
        <Hero />

        {/* The truth - voiceover monologue */}
        <div className="relative bg-[var(--bg-primary)] transition-colors duration-500">
          <Truth />
        </div>

        {/* The turning - scene transition */}
        <Turning />

        {/* The catalyst - Nicholas's chapter */}
        <Catalyst />

        {/* ACT II: THE CONTAINER */}
        {/* Transcend Clinic - grounded, medical credibility */}
        <Container />

        {/* ACT III: THE JOURNEYS */}
        {/* Documentary series - film festival program */}
        <Journeys />

        {/* The promise - thematic question */}
        <Promise />

        {/* END CREDITS */}
        {/* Partnership invitation & closing credits */}
        <div className="relative bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] transition-colors duration-500">
          <Invitation />
        </div>
      </main>
    </>
  );
}
