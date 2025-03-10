
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90 after:absolute after:inset-0 after:rounded-md after:border after:border-primary/40 after:content-[""] after:opacity-0 hover:after:opacity-100 after:transition-opacity': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border border-primary/20 bg-transparent text-foreground hover:bg-primary/10': variant === 'outline',
          'h-10 px-4 py-2 text-sm': size === 'default',
          'h-8 px-3 text-xs': size === 'sm',
          'h-12 px-6 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
