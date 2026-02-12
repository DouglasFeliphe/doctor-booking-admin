import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import type { ComponentProps } from 'react';

const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
  variants: {
    status: {
      active: 'bg-green-100 text-green-700',
      blocked: 'bg-red-100 text-red-700',
      pending: 'bg-yellow-100 text-yellow-700',
      inactive: 'bg-gray-100 text-gray-700',
    },
  },
});

export interface StatusBadgeProps
  extends ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export function StatusBadge({ className, status, ...props }: StatusBadgeProps) {
  return (
    <span
      data-slot="status-badge"
      className={twMerge(badgeVariants({ status }), className)}
      {...props}
    />
  );
}
