
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withDivider?: boolean;
  dividerPosition?: 'top' | 'bottom';
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Section = ({
  id,
  className,
  children,
  withDivider = false,
  dividerPosition = 'top',
  fullWidth = false,
  noPadding = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'relative border-b border-border/20',
        !noPadding && 'py-20 md:py-32',
        className
      )}
    >
      <div className={cn(
        'mx-auto', 
        { 
          'px-6 md:px-8': !noPadding,
          'max-w-7xl': !fullWidth 
        }
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
