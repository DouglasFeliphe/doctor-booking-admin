import {
  LayoutDashboard,
  Calendar,
  Users,
  UserRound,
  Settings,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Calendar, label: 'Appointments', active: false },
  { icon: Users, label: 'Patients', active: true },
  { icon: UserRound, label: 'Doctors', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  return (
    <aside className="border-border flex h-screen w-64 flex-col border-r bg-surface p-4">
      <div className="mb-10 flex items-center gap-2 px-2 text-primary">
        <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
          <span className="font-bold">+</span>
        </div>
        <span className="text-lg font-bold text-foreground">HealthAdmin</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={twMerge(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              item.active
                ? 'bg-blue-50 text-primary'
                : 'text-foreground-subtle hover:bg-muted hover:text-foreground',
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
