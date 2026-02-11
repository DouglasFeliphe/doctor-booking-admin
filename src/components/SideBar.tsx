import {
  LayoutDashboard,
  Calendar,
  Users,
  UserRound,
  Settings,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const navItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Appointments',
    link: '/appointments',
  },
  { icon: Users, label: 'Patients', link: '/patients' },
  { icon: UserRound, label: 'Doctors', link: '/doctors' },
  { icon: Settings, label: 'Settings', link: '/settings' },
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
          <Link
            to={item.link}
            id={`nav-item-${item.label.toLowerCase()}`}
            key={item.label}
            className={twMerge(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors target:bg-blue-50 focus:bg-blue-50 focus:text-primary',
            )}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
