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
      'inline-flex items-center justify-center font-body tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sacred-gold focus-visible:ring-offset-2 focus-visible:ring-offset-void-black';

    const variants = {
      primary:
        'bg-sacred-gold text-void-black border border-sacred-gold hover:bg-transparent hover:text-sacred-gold',
      secondary:
        'bg-transparent text-sacred-gold border border-sacred-gold hover:bg-sacred-gold hover:text-void-black',
      ghost:
        'bg-transparent text-light border border-transparent hover:text-sacred-gold',
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
