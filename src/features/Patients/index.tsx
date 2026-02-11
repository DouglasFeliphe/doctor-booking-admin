import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// import { Button } from './button';
import { Tabs } from '@base-ui/react/tabs';
import { Button } from '../../components/button';
import { StatusBadge } from './components/StatusBadge';

interface Patient {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'active' | 'blocked';
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    avatar: 'https://i.pravatar.cc/300/123',
    status: 'active',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen88@gmail.com',
    avatar: 'https://i.pravatar.cc/300/124',
    status: 'blocked',
  },
  // ... outros pacientes
];

export function Patients() {
  return (
    <div data-slot="patient-container" className="flex flex-col gap-6">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search patients by name or email"
          className="bg-surface border-border focus-visible:ring-ring w-full rounded-xl border py-3 pr-4 pl-11 text-sm outline-none focus-visible:ring-2"
        />
      </div>

      <Tabs.Root defaultValue="all" className="flex flex-col gap-4">
        <Tabs.List className="border-border flex gap-8 border-b">
          {['All Patients', 'Active', 'Blocked'].map((tab) => (
            <Tabs.Tab
              key={tab}
              value={tab.toLowerCase().split(' ')[0]}
              className="text-foreground-subtle data-[selected]:border-primary data-[selected]:text-primary cursor-pointer border-b-2 border-transparent py-2 text-sm font-medium transition-colors outline-none"
            >
              {tab}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-foreground-subtle border-b border-border text-xs font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Patient Details</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="flex items-center gap-3 px-6 py-4">
                    <img
                      src={patient.avatar}
                      alt=""
                      className="size-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground">
                        {patient.name}
                      </span>
                      <span className="text-foreground-subtle text-xs">
                        {patient.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={patient.status}>
                      {patient.status.charAt(0).toUpperCase() +
                        patient.status.slice(1)}
                    </StatusBadge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button
                        variant={
                          patient.status === 'active' ? 'secondary' : 'primary'
                        }
                        size="sm"
                      >
                        {patient.status === 'active' ? 'Block' : 'Unblock'}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-border flex items-center justify-between border-t px-6 py-4">
            <span className="text-foreground-subtle text-sm">
              Showing <b>1 - 5</b> of <b>248</b> patients
            </span>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm" aria-label="Previous page">
                <ChevronLeft />
              </Button>
              <Button variant="primary" size="sm">
                1
              </Button>
              <Button variant="secondary" size="sm">
                2
              </Button>
              <Button variant="secondary" size="sm" aria-label="Next page">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </Tabs.Root>
    </div>
  );
}
