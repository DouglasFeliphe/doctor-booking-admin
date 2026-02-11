import { Bell } from 'lucide-react';
import type { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, ...props }: HeaderProps) {
  const currentPath = useLocation().pathname;

  const renderHeaderTitle = () => {
    const data: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/patients': 'Manage Patients',
      '/appointments': 'Manage Appointments',
      '/doctors': 'Manage Doctors',
      '/settings': 'Basic Settings',
    };

    return data[currentPath] || 'Dashboard'; // Default to 'Dashboard' if path is not found
  };

  return (
    <header
      data-slot="header"
      className={twMerge(
        'flex h-16 items-center justify-end gap-4 border-b border-border bg-surface px-8',
        className,
      )}
      {...props}
    >
      <h1 className="text-xl font-bold text-foreground mr-auto">
        {renderHeaderTitle()}
      </h1>

      <button
        type="button"
        aria-label="Notifications"
        className="text-foreground-subtle hover:bg-muted relative flex size-10 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
      >
        <Bell className="size-5" />
        {/* Indicador de notificação (opcional, baseado no ponto visual) */}
        <span className="bg-destructive absolute top-2.5 right-2.5 size-2 rounded-full border-2 border-surface" />
      </button>

      {/* <div className="flex items-center gap-3 pl-2"> */}
      <button
        type="button"
        aria-label="Profile"
        className="focus-visible:ring-ring overflow-hidden rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer"
      >
        <img
          src="https://i.pravatar.cc/300/5"
          alt="User profile"
          className="size-9 rounded-full object-cover bg-muted"
        />
      </button>
      {/* </div> */}
    </header>
  );
}
