
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withDivider?: boolean;
  dividerPosition?: 'top' | 'bottom';
  fullWidth?: boolean;
}

const Section = ({
  id,
  className,
  children,
  withDivider = false,
  dividerPosition = 'top',
  fullWidth = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-32',
        {
          'section-divider mt-[-80px] pt-[120px]': withDivider && dividerPosition === 'top',
          'pb-[120px]': withDivider && dividerPosition === 'bottom',
        },
        className
      )}
    >
      <div className={cn('mx-auto px-6 md:px-8', { 'max-w-7xl': !fullWidth })}>
        {children}
      </div>
    </section>
  );
};

export default Section;
