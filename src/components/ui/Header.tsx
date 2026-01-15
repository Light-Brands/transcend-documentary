'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
      { label: 'The Story', href: '/#truth' },
      { label: 'The Clinic', href: '/#container' },
      { label: 'Episodes', href: '/#journeys' },
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
    label: 'Partner With Us',
    href: '/#invitation',
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
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
      <header className="relative z-50">
        {/* Utility Bar */}
        <div className="header-utility-bar">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-10">
              {/* Phone */}
              <a
                href="tel:+1-888-TRANSCEND"
                className="text-caption-sm text-[var(--text-muted)] hover:text-sacred-gold-text transition-colors flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">1-888-TRANSCEND</span>
              </a>

              {/* Right side */}
              <div className="flex items-center gap-4">
                <a
                  href="mailto:hello@transcenddocumentary.com"
                  className="text-caption-sm font-accent uppercase tracking-wider text-sacred-gold-text hover:text-[var(--text-primary)] transition-colors"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header-main">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/Clinic_Small.png"
                    alt="Transcend Clinic Logo"
                    width={120}
                    height={60}
                    className="h-auto w-auto max-h-12 md:max-h-14"
                    priority
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8 uppercase">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="nav-item relative">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-body-sm text-[var(--text-secondary)] hover:text-sacred-gold-text transition-colors py-4 uppercase"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button className="text-body-sm text-[var(--text-secondary)] hover:text-sacred-gold-text transition-colors py-4 flex items-center gap-1 uppercase">
                          {item.label}
                          <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {item.children && (
                          <div className="nav-dropdown uppercase">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="nav-dropdown-item"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-[var(--text-primary)]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-[var(--border-color)]">
              <div className="flex items-center">
                <Image
                  src="/Clinic_Small.png"
                  alt="Transcend Clinic Logo"
                  width={100}
                  height={50}
                  className="h-auto w-auto max-h-10"
                  priority
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--text-primary)]"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Items */}
            <div className="overflow-y-auto h-[calc(100vh-4rem)]">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mobile-nav-accordion">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-6 py-4 text-lg text-[var(--text-primary)]"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={cn(
                          'mobile-nav-accordion-header w-full text-left text-lg',
                          openAccordion === item.label && 'text-sacred-gold-text'
                        )}
                        onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                      >
                        {item.label}
                        <svg
                          className={cn(
                            'w-5 h-5 transition-transform',
                            openAccordion === item.label && 'rotate-180'
                          )}
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
                        animate={{
                          height: openAccordion === item.label ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="pb-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-8 py-3 text-[var(--text-secondary)] hover:text-sacred-gold-text transition-colors"
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

              {/* Mobile Footer */}
              <div className="px-6 py-8 mt-8 border-t border-[var(--border-color)]">
                <a
                  href="tel:+1-888-TRANSCEND"
                  className="flex items-center gap-3 text-[var(--text-muted)] mb-4"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-888-TRANSCEND
                </a>
                <a
                  href="mailto:hello@transcenddocumentary.com"
                  className="inline-block font-accent uppercase tracking-wider text-sm text-sacred-gold-text"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

export default Header;
