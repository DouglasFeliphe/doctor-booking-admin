import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import type { ComponentProps } from 'react';
import { useId } from 'react';

const inputVariants = tv({
  base: [
    'w-full rounded-lg border bg-surface px-3 py-2 text-sm transition-colors',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    'data-[error]:border-destructive data-[error]:focus-visible:ring-destructive',
  ],
  variants: {
    variant: {
      default: 'border-input text-foreground',
      filled: 'border-transparent bg-muted text-foreground',
      destructive: 'border-destructive text-destructive',
    },
    size: {
      sm: 'h-9 text-xs',
      md: 'h-11 text-sm',
      lg: 'h-12 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface InputProps
  extends
    Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: boolean | string;
}

export function Input({
  className,
  variant,
  label,
  size,
  error,
  disabled,
  ...props
}: InputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={props.id}
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        data-slot="input"
        data-disabled={disabled ? '' : undefined}
        data-error={error}
        className={twMerge(inputVariants({ variant, size }), className)}
        disabled={disabled}
        {...props}
      />
      {error && (
        <>
          <p className="mt-2 text-xs text-destructive">{error}</p>
        </>
      )}
    </>
  );
}

export interface InputFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  inputProps?: InputProps;
  children?: React.ReactNode;
}

export function InputField({
  label,
  error,
  hint,
  required,
  inputProps,
  children,
}: InputFieldProps) {
  const generatedId = useId();
  const inputId = inputProps?.id || generatedId;

  return (
    <div data-slot="input-field" className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </label>
      )}
      {children || <Input {...inputProps} id={inputId} error={!!error} />}
      {error && (
        <p data-slot="input-error" className="text-xs text-destructive">
          {error}
        </p>
      )}
      {hint && !error && (
        <p data-slot="input-hint" className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
}
