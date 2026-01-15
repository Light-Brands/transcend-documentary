'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Header } from '@/components/ui';
import { CONTENT, CHARACTERS, EPISODES, Episode } from '@/lib/constants';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Minimal, scroll-driven landing page with GSAP
export default function Home() {
  return (
    <>
      <Header />
      <FilmBars />
      <main className="relative bg-[var(--bg-primary)] overflow-x-hidden">
        <HeroV2 />
        <DissonanceV2 />
        <BlackoutV2 />
        <TruthV2 />
        <ContainerV2 />
        <EpisodesV2 />
        <PromiseV2 />
        <InvitationV2 />
      </main>
    </>
  );
}

// ============================================
// FILM BARS - Cinematic letterbox with grain
// Controlled by scroll position
// ============================================
function FilmBars() {
  const [isVisible, setIsVisible] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Show bars after hero, hide at invitation (partnership section)
    const showTrigger = ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'bottom 80%',
      end: 'bottom 20%',
      onEnter: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false),
    });

    // Use the partnership content element (in InvitationV2 section)
    const hideTrigger = ScrollTrigger.create({
      trigger: '#partnership-content',
      start: 'top 80%',
      end: 'top 50%',
      onEnter: () => setIsVisible(false),
      onLeaveBack: () => setIsVisible(true),
    });

    return () => {
      showTrigger.kill();
      hideTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* Top Film Bar */}
      <div
        className={`fixed top-0 left-0 right-0 h-[6vh] bg-[#0a0a0a] z-40 pointer-events-none transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      />
      {/* Bottom Film Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-[6vh] bg-[#0a0a0a] z-40 pointer-events-none transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      />
      {/* Film Grain Overlay - Only visible when bars are visible */}
      <div
        className={`fixed inset-0 z-30 pointer-events-none transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.12,
          mixBlendMode: 'overlay',
        }}
      />
      {/* Vignette Effect - Only visible when bars are visible */}
      <div
        className={`fixed inset-0 z-30 pointer-events-none transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />
    </>
  );
}

// ============================================
// HERO V2 - Cinematic documentary opening
// Film-inspired with screenplay aesthetics
// ============================================
function HeroV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic opening timeline (without film bars)
      const tl = gsap.timeline({ delay: 0.5 });

      // Production company fades in
      tl.fromTo('.hero-production',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
      // Film metadata appears
      .fromTo('.hero-meta',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      // Scene header types in
      .fromTo('.hero-scene',
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        '+=0.3'
      )
      // Main title reveals dramatically
      .fromTo('.hero-title-line',
        { opacity: 0, y: 40, letterSpacing: '0.3em' },
        { opacity: 1, y: 0, letterSpacing: '0.15em', duration: 1, ease: 'power3.out', stagger: 0.15 },
        '+=0.2'
      )
      // Screenplay direction fades in
      .fromTo('.hero-direction',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      )
      // Tagline with typewriter cursor
      .fromTo('.hero-tagline',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      // Episode count badge
      .fromTo('.hero-episodes',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.1'
      )
      // Scroll cue
      .fromTo('.hero-scroll',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '+=0.3'
      );

      // Scroll-driven fade out with cinematic feel
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.98,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '80% top',
          scrub: 0.5,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-[100svh] flex items-center justify-center overflow-hidden -mt-8 sm:-mt-12"
    >
      {/* Corner Registration Marks - Film aesthetic */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-[var(--text-muted)]/20 opacity-0 hero-meta" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-[var(--text-muted)]/20 opacity-0 hero-meta" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-[var(--text-muted)]/20 opacity-0 hero-meta" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-[var(--text-muted)]/20 opacity-0 hero-meta" />

      {/* Main Content Container - matches nav width */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Film Metadata Row */}
        <div className="hero-meta flex items-center justify-between mb-8 sm:mb-12 opacity-0">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)]/60 font-mono uppercase">
            <span>CAM A</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]/40" />
            <span>24 FPS</span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]/40" />
            <span>2.39:1</span>
          </div>
          <div className="text-[10px] sm:text-xs tracking-[0.15em] text-[var(--text-muted)]/60 font-mono">
            TC 00:00:00:00
          </div>
        </div>

        {/* Centered Content */}
        <div className="text-center">

        {/* Production Company */}
        <div className="hero-production mb-8 sm:mb-12 opacity-0">
          <span className="text-[10px] sm:text-xs tracking-[0.4em] text-[var(--text-muted)]/70 uppercase">
            Light Brands Collective presents
          </span>
        </div>

        {/* Scene Header - Screenplay style */}
        <div className="hero-scene mb-6 sm:mb-8 opacity-0">
          <span className="font-accent text-[10px] sm:text-xs tracking-[0.2em] text-sacred-gold-text/80 uppercase">
            INT. THE HUMAN CONDITION — CONTINUOUS
          </span>
        </div>

        {/* Main Title - Stacked for impact */}
        <div className="mb-8 sm:mb-12">
          <h1 className="font-display">
            <span className="hero-title-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.15em] text-[var(--text-primary)] opacity-0">
              TRANSCEND
            </span>
          </h1>
        </div>

        {/* Screenplay Direction - Parenthetical */}
        <div className="hero-direction mb-6 sm:mb-8 opacity-0">
          <p className="font-accent text-xs sm:text-sm text-[var(--text-muted)]/80 italic max-w-lg mx-auto leading-relaxed">
            (A documentary series about the journey from pain to purpose.
            <br />
            About people who stopped running—and came home.)
          </p>
        </div>

        {/* Tagline with Typewriter Effect */}
        <div className="hero-tagline mb-8 sm:mb-10 opacity-0">
          <p className="font-body text-sm sm:text-base md:text-lg text-[var(--text-secondary)] tracking-wide">
            Bringing the Lost Traveler Back Home
            <span className={`inline-block w-[2px] h-[1.1em] bg-sacred-gold ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>

        {/* Episode Badge */}
        <div className="hero-episodes opacity-0">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-[var(--border-color)] rounded-full">
            <span className="w-2 h-2 rounded-full bg-sacred-gold/80" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase font-medium">
              6 Episodes
            </span>
            <span className="text-[10px] sm:text-xs text-[var(--text-muted)]/60">
              •
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.15em] text-[var(--text-muted)] uppercase">
              Documentary Series
            </span>
          </div>
        </div>

        {/* Scroll Indicator - Film reel inspired */}
        <div className="hero-scroll flex flex-col items-center gap-3 mt-12 sm:mt-16 opacity-0">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 border border-[var(--text-muted)]/40 rounded-full" />
            <div className="w-1.5 h-1.5 border border-[var(--text-muted)]/40 rounded-full" />
            <div className="w-1.5 h-1.5 bg-sacred-gold/60 rounded-full" />
            <div className="w-1.5 h-1.5 border border-[var(--text-muted)]/40 rounded-full" />
            <div className="w-1.5 h-1.5 border border-[var(--text-muted)]/40 rounded-full" />
          </div>
          <span className="text-[9px] sm:text-[10px] text-[var(--text-muted)]/60 tracking-[0.25em] uppercase">
            Begin
          </span>
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-sacred-gold/60 via-sacred-gold/30 to-transparent" />
        </div>

        </div>{/* End centered content */}

        {/* Reel Markers - Bottom Row */}
        <div className="hero-meta flex items-center justify-between mt-8 sm:mt-12 opacity-0">
          <div className="text-[9px] sm:text-[10px] tracking-[0.15em] text-[var(--text-muted)]/50 font-mono uppercase">
            Reel 01
          </div>
          <div className="text-[9px] sm:text-[10px] tracking-[0.15em] text-[var(--text-muted)]/50 font-mono uppercase">
            Take 01
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DISSONANCE V2 - Words scrub in perfectly
// ============================================
function DissonanceV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  const words = ['Modern world.', 'Performance.', 'Addiction.', 'Silence.', 'Disconnection.'];

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wordElements = gsap.utils.toArray<HTMLElement>('.dissonance-word');
      const label = document.querySelector('.dissonance-label');

      // Pin the section while scrolling through
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        pin: wordsRef.current,
        pinSpacing: true,
      });

      // Fade in label
      gsap.fromTo(label,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.3,
          },
        }
      );

      // Each word animates in sequence based on scroll
      wordElements.forEach((word, i) => {
        gsap.fromTo(word,
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 15}% top`,
              end: `top+=${i * 15 + 12}% top`,
              scrub: 0.3,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh]">
      <div ref={wordsRef} className="h-[100svh] flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 w-full max-w-4xl mx-auto">
          <span className="dissonance-label text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-sacred-gold-text uppercase mb-10 sm:mb-14 md:mb-16 block font-medium opacity-0">
            Act I — Dissonance
          </span>
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {words.map((word, i) => (
              <p
                key={i}
                className="dissonance-word font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[var(--text-primary)] tracking-wide leading-tight opacity-0"
              >
                {word}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// BLACKOUT V2 - Dark overlay scrubs perfectly
// ============================================
function BlackoutV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const overlay = document.querySelector('.blackout-overlay');
      const text = document.querySelector('.blackout-text');

      // Pin content during scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=250%',
        pin: contentRef.current,
        pinSpacing: true,
      });

      // Overlay fades in then out
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 0.5,
        },
      })
      .fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      .to(overlay,
        { opacity: 1, duration: 0.4 }
      )
      .to(overlay,
        { opacity: 0, duration: 0.3 }
      );

      // Text fades in, holds, then out
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 0.5,
        },
      })
      .fromTo(text,
        { opacity: 0, scale: 0.9, letterSpacing: '0.02em' },
        { opacity: 1, scale: 1, letterSpacing: '0.06em', duration: 0.35 }
      )
      .to(text,
        { opacity: 1, duration: 0.3 }
      )
      .to(text,
        { opacity: 0, scale: 0.95, duration: 0.35 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div ref={contentRef} className="h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Dark overlay */}
        <div className="blackout-overlay absolute inset-0 bg-[#0A0A0A] opacity-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        </div>

        {/* Text */}
        <p className="blackout-text relative z-10 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center px-6 sm:px-8 max-w-4xl tracking-wide leading-relaxed opacity-0">
          {CONTENT.blackout.line}
        </p>
      </div>
    </section>
  );
}

// ============================================
// TRUTH V2 - Simple, impactful reveal
// ============================================
function TruthV2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelector('.truth-content');
      const highlight = document.querySelector('.truth-highlight');

      // Simple fade up when section enters view
      gsap.fromTo(content,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // "They are maps" reveals with slight delay and emphasis
      gsap.fromTo(highlight,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 md:py-48 lg:py-56">
      <div className="flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8 max-w-4xl">
          {/* Main text block - all appears together */}
          <div className="truth-content opacity-0">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-wide leading-relaxed mb-3 sm:mb-4">
              The darkest parts of us—
            </p>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--text-muted)] tracking-wide italic leading-relaxed mb-3 sm:mb-4">
              addiction, fear, shame, trauma—
            </p>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-wide leading-relaxed">
              are not defects.
            </p>
          </div>

          {/* The payoff - appears after */}
          <div className="mt-10 sm:mt-14 md:mt-16">
            <div className="w-16 h-[1px] bg-sacred-gold/50 mx-auto mb-8 sm:mb-10" />
            <p className="truth-highlight font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sacred-gold-text tracking-[0.1em] opacity-0">
              They are maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTAINER V2 - Parallax layers
// ============================================
function ContainerV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bg = document.querySelector('.container-bg');
      const label = document.querySelector('.container-label');
      const title = document.querySelector('.container-title');
      const tagline = document.querySelector('.container-tagline');
      const divider = document.querySelector('.container-divider');
      const dividerFill = document.querySelector('.container-divider-fill');
      const lines = gsap.utils.toArray<HTMLElement>('.container-line');

      // Pin section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=250%',
        pin: contentRef.current,
        pinSpacing: true,
      });

      // Background parallax
      gsap.fromTo(bg,
        { y: '-8%' },
        {
          y: '8%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Content reveal sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 0.5,
        },
      });

      tl.fromTo(label,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 }
      )
      .fromTo(title,
        { opacity: 0, y: 30, letterSpacing: '0.1em' },
        { opacity: 1, y: 0, letterSpacing: '0.2em', duration: 0.15 },
        '-=0.05'
      )
      .fromTo(tagline,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 },
        '-=0.05'
      )
      .fromTo(divider,
        { opacity: 0 },
        { opacity: 1, duration: 0.05 }
      )
      .fromTo(dividerFill,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.15, ease: 'power2.inOut' }
      );

      // Lines stagger
      lines.forEach((line, i) => {
        tl.fromTo(line,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.08 },
          `-=${i === 0 ? 0.05 : 0.04}`
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container-section relative">
      <div ref={contentRef} className="h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background with pattern */}
        <div className="container-bg absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-tertiary)] to-[var(--bg-secondary)]">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto">
          <span className="container-label text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-sacred-gold-text uppercase mb-6 sm:mb-8 md:mb-10 block font-medium opacity-0">
            Act II — The Container
          </span>

          <h2 className="container-title font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.15em] text-[var(--text-primary)] mb-5 sm:mb-6 md:mb-8 opacity-0">
            TRANSCEND
          </h2>

          <p className="container-tagline font-body text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] italic mb-8 sm:mb-10 md:mb-12 px-2 opacity-0">
            {CONTENT.container.tagline}
          </p>

          {/* Animated divider */}
          <div className="container-divider relative h-[1px] w-20 sm:w-24 md:w-28 mx-auto mb-8 sm:mb-10 md:mb-12 bg-[var(--border-color)] opacity-0">
            <div className="container-divider-fill absolute inset-0 bg-sacred-gold origin-left scale-x-0" />
          </div>

          <div className="space-y-2 sm:space-y-3">
            {CONTENT.container.description.map((line, i) => (
              <p
                key={i}
                className="container-line font-body text-sm sm:text-base md:text-lg text-[var(--text-muted)] leading-relaxed opacity-0"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// EPISODES V2 - Slow reveal, not a grid
// Expandable accordion + link to episode pages
// ============================================
function EpisodesV2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const header = document.querySelector('.episodes-header');
      const episodes = gsap.utils.toArray<HTMLElement>('.episode-block');

      // Header reveal
      gsap.fromTo(header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Each episode reveals slowly one at a time
      episodes.forEach((episode, i) => {
        // Main content reveal
        gsap.fromTo(episode,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: episode,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Stagger internal elements
        const number = episode.querySelector('.episode-number');
        const title = episode.querySelector('.episode-title');
        const hook = episode.querySelector('.episode-hook');
        const line = episode.querySelector('.episode-line');

        gsap.fromTo(number,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: episode,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(title,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: episode,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(hook,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: episode,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: episode,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="episodes-header text-center mb-16 sm:mb-20 md:mb-28 lg:mb-32 opacity-0">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-sacred-gold-text uppercase mb-4 sm:mb-5 md:mb-6 block font-medium">
            Act III — The Journeys
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] sm:tracking-[0.15em] text-[var(--text-primary)] mb-4 sm:mb-5 md:mb-6">
            THE EPISODES
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-[var(--text-muted)] italic max-w-xl mx-auto">
            Six stories of confrontation and return. Each one a mirror.
          </p>
        </div>

        {/* Episodes - Vertical stacked, slow reveal */}
        <div className="space-y-16 sm:space-y-20 md:space-y-28">
          {EPISODES.map((episode, i) => (
            <EpisodeBlock key={episode.id} episode={episode} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EpisodeBlock({ episode, index }: { episode: Episode; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  // Animate accordion open/close
  useIsomorphicLayoutEffect(() => {
    if (!contentRef.current) return;

    if (isExpanded) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
    }
  }, [isExpanded]);

  return (
    <div ref={blockRef} className="episode-block opacity-0">
      {/* Episode Number & Theme */}
      <div className="flex items-center gap-4 mb-4 sm:mb-5">
        <span className="episode-number text-[10px] sm:text-xs tracking-[0.3em] text-sacred-gold-text uppercase font-medium opacity-0">
          {episode.number}
        </span>
        <div className="episode-line flex-1 h-[1px] bg-[var(--border-color)] origin-left scale-x-0" />
        <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">
          {episode.theme} / {episode.themeSecondary}
        </span>
      </div>

      {/* Title */}
      <h3 className="episode-title font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-[var(--text-primary)] mb-4 sm:mb-6 opacity-0">
        {episode.title}
      </h3>

      {/* Hook - Always visible */}
      <p className="episode-hook font-body text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 opacity-0">
        {episode.hook}
      </p>

      {/* Extended Hook - Always visible */}
      <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6 sm:mb-8">
        {episode.extendedHook}
      </p>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        className="overflow-hidden opacity-0"
        style={{ height: 0 }}
      >
        <div className="pt-4 pb-2 border-t border-[var(--border-color)]">
          {/* Pull Quote */}
          <blockquote className="my-6 sm:my-8 pl-4 sm:pl-6 border-l-2 border-sacred-gold/40">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-sacred-gold-text/90 italic mb-2">
              "{episode.pullQuote}"
            </p>
            {episode.quoteAttribution && (
              <cite className="text-sm text-[var(--text-muted)] not-italic">
                — {episode.quoteAttribution}
              </cite>
            )}
          </blockquote>

          {/* Synopsis */}
          <div className="space-y-4 mb-6 sm:mb-8">
            {episode.synopsis.map((para, i) => (
              <p key={i} className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Themes */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {episode.themes.map((theme, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs tracking-wider text-[var(--text-muted)] uppercase px-3 py-1.5 border border-[var(--border-color)] rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>

          {/* Runtime */}
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
            Runtime: {episode.runtime}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-sacred-gold-text transition-colors"
        >
          <span className="font-medium tracking-wide">
            {isExpanded ? 'Read less' : 'Read more'}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Episode Page Link */}
        <Link
          href={`/episodes/${episode.id}`}
          className="
            inline-flex items-center gap-2
            text-xs sm:text-sm tracking-[0.15em] uppercase
            text-sacred-gold-text hover:text-[var(--text-primary)]
            transition-colors
          "
        >
          <span>View Episode</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ============================================
// PROMISE V2 - Words scrub in sequence
// ============================================
function PromiseV2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const words = ['Integration.', 'Shadow.', 'Wholeness.', 'Responsibility.'];

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const label = document.querySelector('.promise-label');
      const wordElements = gsap.utils.toArray<HTMLElement>('.promise-word');
      const divider = document.querySelector('.promise-divider');
      const closing = document.querySelector('.promise-closing');

      // Pin section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%',
        pin: contentRef.current,
        pinSpacing: true,
      });

      // Label
      gsap.fromTo(label,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.3,
          },
        }
      );

      // Words stagger
      wordElements.forEach((word, i) => {
        gsap.fromTo(word,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 10}% top`,
              end: `top+=${i * 10 + 8}% top`,
              scrub: 0.3,
            },
          }
        );
      });

      // Divider
      gsap.fromTo(divider,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top+=45% top',
            end: 'top+=55% top',
            scrub: 0.3,
          },
        }
      );

      // Closing line
      gsap.fromTo(closing,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top+=55% top',
            end: 'top+=70% top',
            scrub: 0.3,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--bg-secondary)]">
      <div ref={contentRef} className="h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto">
          <span className="promise-label text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-sacred-gold-text uppercase mb-12 sm:mb-14 md:mb-16 lg:mb-20 block font-medium opacity-0">
            Act IV — Return
          </span>

          {/* Words */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            {words.map((word, i) => (
              <span
                key={i}
                className="promise-word font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[var(--text-primary)] tracking-wide opacity-0"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="promise-divider flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 opacity-0">
            <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-sacred-gold/40" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sacred-gold/60" />
            <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-sacred-gold/40" />
          </div>

          <p className="promise-closing font-display text-base sm:text-lg md:text-xl lg:text-2xl text-sacred-gold-text tracking-[0.08em] sm:tracking-[0.1em] italic opacity-0">
            {CONTENT.promise.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// INVITATION V2 - Clean footer with GSAP
// ============================================
function InvitationV2() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelector('.invitation-content');
      const footer = document.querySelector('.invitation-footer');

      gsap.fromTo(content,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(footer,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="invitation-section" className="invitation-section relative py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-8 bg-[var(--bg-primary)]">
      <div className="max-w-3xl mx-auto text-center">
        <div id="partnership-content" className="invitation-content opacity-0">
          {/* Scene marker */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-14">
            <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-[var(--border-color)]" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-[var(--text-muted)] uppercase font-medium">
              End Credits
            </span>
            <div className="w-8 sm:w-12 md:w-16 h-[1px] bg-[var(--border-color)]" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.12em] sm:tracking-[0.15em] text-sacred-gold-text mb-8 sm:mb-10 md:mb-12">
            PARTNERSHIP
          </h2>

          <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12 md:mb-14">
            {CONTENT.invitation.lines.map((line, i) => (
              <p
                key={i}
                className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="mailto:hello@transcenddocumentary.com"
            className="
              inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5
              border border-sacred-gold text-sacred-gold-text
              font-accent text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase
              transition-all duration-300
              hover:bg-sacred-gold hover:text-white
              hover:shadow-[0_4px_20px_rgba(201,169,98,0.25)]
              hover:-translate-y-0.5
            "
          >
            {CONTENT.invitation.cta}
          </a>
        </div>

        {/* Footer */}
        <div className="invitation-footer mt-20 sm:mt-24 md:mt-32 pt-10 sm:pt-12 md:pt-14 border-t border-[var(--border-color)] opacity-0">
          <p className="text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.2em] uppercase mb-2 sm:mb-3">
            Presented by
          </p>
          <p className="font-display text-base sm:text-lg md:text-xl tracking-[0.12em] sm:tracking-[0.15em] text-[var(--text-primary)] mb-4 sm:mb-5">
            {CONTENT.invitation.footer.presented}
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-[var(--text-muted)] mb-8 sm:mb-10">
            {CONTENT.invitation.footer.production}
          </p>

          {/* Final flourish */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-1 h-1 rounded-full bg-sacred-gold/40" />
          </div>

          <p className="text-[10px] sm:text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
