'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { EPISODES } from '@/lib/constants';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'The Documentary',
    children: [
      { label: 'About the Series', href: '#journeys' },
      { label: 'The Story', href: '#truth' },
      { label: 'Nicholas', href: '#catalyst' },
    ],
  },
  {
    label: 'Episodes',
    children: EPISODES.map((ep) => ({
      label: `${ep.number}: ${ep.title}`,
      href: `/episodes/${ep.id}`,
    })),
  },
  {
    label: 'The Clinic',
    href: '#container',
  },
  {
    label: 'Partner With Us',
    href: '#invitation',
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled && 'header-scrolled'
        )}
      >
        {/* Main Header */}
        <div className="header-main">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="font-display text-lg md:text-xl tracking-[0.12em] text-[var(--text-primary)]">
                  TRANSCEND
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="nav-item relative">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-sage)] transition-colors py-3"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-sage)] transition-colors py-3 flex items-center gap-1">
                          {item.label}
                          <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {item.children && (
                          <div className="nav-dropdown">
                            {item.children.map((child) => (
                              <Link key={child.href} href={child.href} className="nav-dropdown-item">
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {/* CTA */}
                <a
                  href="mailto:hello@transcenddocumentary.com"
                  className="ml-4 text-xs font-medium uppercase tracking-wider text-[var(--color-sage)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-[var(--text-primary)]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-4 h-14 border-b border-[var(--border-color)]">
              <span className="font-display text-lg tracking-[0.12em] text-[var(--text-primary)]">
                TRANSCEND
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--text-primary)]"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-3.5rem)]">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mobile-nav-accordion">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-5 py-3.5 text-[var(--text-primary)]"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={cn(
                          'mobile-nav-accordion-header w-full text-left',
                          openAccordion === item.label && 'text-[var(--color-sage)]'
                        )}
                        onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                      >
                        {item.label}
                        <svg
                          className={cn('w-4 h-4 transition-transform', openAccordion === item.label && 'rotate-180')}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <motion.div
                        className="overflow-hidden"
                        initial={false}
                        animate={{ height: openAccordion === item.label ? 'auto' : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="pb-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-7 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--color-sage)] transition-colors"
                              onClick={handleNavClick}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}

              <div className="px-5 py-6 mt-4 border-t border-[var(--border-color)]">
                <a
                  href="mailto:hello@transcenddocumentary.com"
                  className="inline-block text-sm font-medium uppercase tracking-wider text-[var(--color-sage)]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-14" />
    </>
  );
}

export default Header;
