'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-body tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]';

    const variants = {
      primary:
        'bg-[var(--color-sage)] text-white border border-[var(--color-sage)] hover:bg-transparent hover:text-[var(--color-sage)]',
      secondary:
        'bg-transparent text-[var(--color-sage)] border border-[var(--color-sage)] hover:bg-[var(--color-sage)] hover:text-white',
      ghost:
        'bg-transparent text-[var(--text-primary)] border border-transparent hover:text-[var(--color-sage)]',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-xs',
      md: 'px-8 py-4 text-sm',
      lg: 'px-10 py-5 text-sm',
    };

    const buttonContent = (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );

    // If href is provided, wrap in anchor
    if (href) {
      return (
        <a href={href} className="inline-block">
          {buttonContent}
        </a>
      );
    }

    return buttonContent;
  }
);

Button.displayName = 'Button';

export default Button;
