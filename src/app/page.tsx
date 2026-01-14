import {
  Hero,
  Dissonance,
  Blackout,
  Truth,
  Turning,
  Container,
  People,
  Promise,
  Invitation,
} from '@/components/sections';
import { Header } from '@/components/ui';

export default function Home() {
  return (
    <>
      {/* Cinematic Header with sticky navigation */}
      <Header />

      <main className="relative bg-void-black">
        {/* OPENING: Motion-first hero with PAIN → PURPOSE kinetic typography */}
        <Hero />

        {/* ACT I — DISSONANCE */}
        {/* Modern world, performance, addiction, silence, disconnection */}
        <Dissonance />

        {/* "Holy Sh*t" moment - blackout with devastating truth */}
        <Blackout />

        {/* The truth - maps, not defects */}
        <Truth />

        {/* The turning - remembering who we are */}
        <Turning />

        {/* ACT II — THE CONTAINER */}
        {/* Transcend - "Every story passes through a place" */}
        <Container />

        {/* ACT III — THE PEOPLE */}
        {/* Julien, Businessman, Pastor, Wife, Nicholas */}
        <People />

        {/* ACT IV — RETURN */}
        {/* Integration, Shadow, Wholeness, Responsibility */}
        <Promise />

        {/* END CREDITS */}
        {/* Partnership invitation, ecosystem signal & closing credits */}
        <Invitation />
      </main>
    </>
  );
}
