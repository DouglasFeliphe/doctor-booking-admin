import { twMerge } from 'tailwind-merge';
import { Eye, Lock } from 'lucide-react';
import type { ComponentProps } from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';

export interface LoginFormProps extends ComponentProps<'div'> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  return (
    <div
      data-slot="login-form"
      className={twMerge(
        'flex min-h-screen flex-col items-center justify-center bg-surface p-6',
        className,
      )}
      {...props}
    >
      <div className="w-full max-w-md">
        <LoginCard />
      </div>
      <LoginFooter />
    </div>
  );
}

const LoginCard = () => {
  return (
    <div
      data-slot="login-card"
      className="flex flex-col items-center gap-6 rounded-xl border border-border bg-surface-raised p-8 shadow-sm"
    >
      <LoginIcon />
      <LoginHeader />
      <LoginFields />
      <LoginActions />
      <LoginSecurityNote />
    </div>
  );
};

const LoginIcon = () => {
  return (
    <div
      data-slot="login-icon"
      className="flex size-16 items-center justify-center rounded-full bg-primary/10"
    >
      <div className="relative">
        <Lock className="size-8 text-primary" strokeWidth={2} />
        <div className="absolute -right-1 -top-1 size-3 rounded-full bg-primary" />
      </div>
    </div>
  );
};

const LoginHeader = () => {
  return (
    <div
      data-slot="login-header"
      className="flex flex-col items-center gap-2 text-center"
    >
      <h1 className="text-2xl font-semibold text-foreground">
        Login to Admin Panel
      </h1>
      <p className="text-sm text-muted-foreground">
        Please enter your credentials to continue to the doctor appointment
        system.
      </p>
    </div>
  );
};

const LoginFields = () => {
  return (
    <div data-slot="login-fields" className="flex w-full flex-col gap-4">
      <EmailField />
      <PasswordField />
    </div>
  );
};

const EmailField = () => {
  return (
    <div data-slot="email-field">
      <Input
        label="Email Address"
        id="email"
        type="email"
        placeholder="admin@doctorapp.com"
      />
    </div>
  );
};

const PasswordField = () => {
  return (
    <div data-slot="password-field">
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="••••••••"
        error="Incorrect password"
      />
    </div>
  );
};

const LoginActions = () => {
  return (
    <div data-slot="login-actions" className="flex w-full flex-col gap-4">
      <div className="flex justify-end">
        <a
          href="#"
          className={twMerge(
            'text-sm font-medium text-primary transition-colors hover:text-primary/80',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded',
          )}
        >
          Forgot password?
        </a>
      </div>

      <Button type="submit" size="lg">
        Sign in
      </Button>
    </div>
  );
};

const LoginSecurityNote = () => {
  return (
    <p data-slot="security-note" className="text-xs text-muted-foreground">
      Secured by Industry Standard Encryption
    </p>
  );
};

const LoginFooter = () => {
  return (
    <footer data-slot="login-footer" className="mt-8 text-center">
      <p className="text-xs text-muted-foreground">
        © 2024 DoctorApp Health Systems. All rights reserved.
      </p>
    </footer>
  );
};
