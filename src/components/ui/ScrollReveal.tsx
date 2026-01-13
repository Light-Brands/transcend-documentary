'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, viewportSettings } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.3,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-50px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Text line reveal component for poetic statements
interface LineRevealProps {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  goldLines?: readonly number[]; // Indices of lines that should be gold
  lightLines?: readonly number[]; // Indices of lines that should be light/white
  staggerDelay?: number;
}

export function LineReveal({
  lines,
  className,
  lineClassName,
  goldLines = [],
  lightLines = [],
  staggerDelay = 0.15,
}: LineRevealProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={containerVariants}
    >
      {lines.map((line, index) => {
        const isGold = goldLines.includes(index);
        const isLight = lightLines.includes(index);
        const isEmpty = line === '';

        if (isEmpty) {
          return <div key={index} className="h-6 md:h-8" />;
        }

        return (
          <motion.div
            key={index}
            variants={lineVariants}
            className={cn(
              lineClassName,
              isGold && 'text-sacred-gold',
              isLight && 'text-light'
            )}
          >
            {line}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ScrollReveal;
