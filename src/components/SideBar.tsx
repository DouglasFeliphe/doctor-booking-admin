import { useTheme } from '@/context/themeContext';
import {
  Calendar,
  LayoutDashboard,
  Moon,
  Settings,
  Sun,
  UserRound,
  Users,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Button } from './button';

const navItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    link: '/dashboard',
    default: true,
  },
  {
    icon: Calendar,
    label: 'Appointments',
    link: '/appointments',
    default: false,
  },
  { icon: Users, label: 'Patients', link: '/patients', default: false },
  { icon: UserRound, label: 'Doctors', link: '/doctors', default: false },
  { icon: Settings, label: 'Settings', link: '/settings', default: false },
];

export function Sidebar() {
  const currentPath = useLocation().pathname;

  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="border-border flex h-screen w-64 flex-col border-r bg-surface p-4">
      <div className="mb-10 flex items-center gap-2 px-2 text-primary">
        <div className="bg-primary/10 flex size-8 items-center justify-center rounded-lg">
          <span className="font-bold">+</span>
        </div>
        <span className="text-lg font-bold text-foreground">HealthAdmin</span>
      </div>
      <div className="bg-"></div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            to={item.link}
            id={`nav-item-${item.label.toLowerCase()}`}
            key={item.label}
            className={twMerge(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors target:bg-blue-50 data-[active=true]:bg-blue-100 data-[active=true]:text-primary',
            )}
            data-active={currentPath === item.link}
          >
            <item.icon className="size-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <Button className="w-fit" variant="outline" onClick={toggleTheme}>
        {theme === 'light' ? (
          <Sun className="red" />
        ) : (
          <Moon className="rotate-180" />
        )}
      </Button>
    </aside>
  );
}
