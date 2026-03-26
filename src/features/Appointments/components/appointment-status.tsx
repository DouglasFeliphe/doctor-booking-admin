import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import type { ComponentProps } from 'react';

export const statusVariants = tv({
  base: 'inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider',
  variants: {
    variant: {
      scheduled: 'text-blue-600',
      completed: 'text-green-600',
      cancelled: 'text-destructive',
    },
  },
});

export interface AppointmentStatusProps
  extends ComponentProps<'span'>, VariantProps<typeof statusVariants> {}

export function AppointmentStatus({
  className,
  variant,
  children,
  ...props
}: AppointmentStatusProps) {
  return (
    <span
      className={twMerge(statusVariants({ variant }), className)}
      {...props}
    >
      <span
        className={twMerge(
          'size-1.5 rounded-full',
          variant === 'scheduled' && 'bg-blue-600',
          variant === 'completed' && 'bg-green-600',
          variant === 'cancelled' && 'bg-destructive',
        )}
      />
      {children}
    </span>
  );
}
