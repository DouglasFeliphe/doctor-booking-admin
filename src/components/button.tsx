import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import type { ComponentProps } from 'react';

const buttonVariants = tv({
  base: [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  variants: {
    variant: {
      primary:
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
      secondary:
        'border-border bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border-border bg-transparent text-foreground hover:bg-muted',
      ghost: 'border-transparent bg-transparent text-foreground hover:bg-muted',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90',
      link: 'border-transparent bg-transparent text-primary underline-offset-4 hover:underline',
    },
    size: {
      sm: 'h-9 px-3 text-xs [&_svg]:size-3.5',
      md: 'h-11 px-4 text-sm [&_svg]:size-4',
      lg: 'h-12 px-6 text-base [&_svg]:size-5',
      icon: 'size-9 [&_svg]:size-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  disabled,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      data-disabled={disabled ? '' : undefined}
      className={twMerge(buttonVariants({ variant, size }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
