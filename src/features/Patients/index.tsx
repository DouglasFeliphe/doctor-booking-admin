import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/button';
import { DataTable, type Column } from '@/components/DataTable';
import SearchInput from '@/components/SearchInput';
import { StatusBadge } from '@/components/StatusBadge';
import { useConfirm } from '@/context/modalConfirmContext';
import { Tabs } from '@base-ui/react/tabs';
import { useState } from 'react';
import { PatientQuickView } from './components/PatientQuickView';
import type { Patient } from './types/patient.types';

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
    phone: '+1 (555) 012-3456',
    status: 'active',
    totalVisits: 12,
    lastInternalNote:
      'Patient requested female doctor for next visit - Oct 28, 2023',
    missedAppointments: 1,
    lastVisitDate: 'Oct 24, 2023',
    isVerified: false,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen88@gmail.com',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704e',
    phone: '+1 (555) 987-6543',
    status: 'blocked',
    totalVisits: 5,
    lastInternalNote:
      'Patient has a history of missing appointments - Sep 10, 2023',
    missedAppointments: 3,
    lastVisitDate: 'Sep 15, 2023',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704f',
    phone: '+1 (555) 456-7890',
    status: 'active',
    totalVisits: 8,
    lastInternalNote:
      'Patient is a new patient and has not yet been seen by a doctor.',
    missedAppointments: 0,
    lastVisitDate: 'Nov 1, 2023',
    isVerified: false,
  },
];

export function Patients() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const { confirm } = useConfirm();

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleChangeTab(tab: string) {
    setActiveTab(tab);
  }

  const handleBlockClick = (patient: Patient) => {
    confirm({
      title: 'Block Patient',
      description:
        'Are you sure you want to block this patient? This action cannot be undone.',
      confirmText: 'Yes, Block Patient',
      cancelText: 'No, Keep Appointment',
      onConfirm: () => {
        console.log(`Blocking patient ${patient.name}...`);
        // Lógica de bloqueio aqui
      },
    });
  };

  const dataTableColumns: Column<Patient>[] = [
    {
      header: 'Name',
      accessor: (patient) => (
        <Avatar>
          <Avatar.Img src={patient.avatar} alt={patient.name} />
          <Avatar.Container>
            <Avatar.Name>{patient.name}</Avatar.Name>
            <Avatar.Description>{patient.email}</Avatar.Description>
          </Avatar.Container>
        </Avatar>
      ),
    },
    {
      header: 'Status',
      accessor: (patient) => (
        <StatusBadge status={patient.status}>{patient.status}</StatusBadge>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      accessor: (patient) => (
        <div className="flex items-center gap-2 justify-end">
          <PatientQuickView data={patient} />

          <Button
            size="sm"
            variant="outline"
            onClick={() => handleBlockClick(patient)}
          >
            {patient.status === 'active' ? 'Block' : 'Unblock'}
          </Button>
        </div>
      ),
    },
  ];

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'all' || patient.status === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div data-slot="patient-container" className="flex flex-col gap-6">
      <SearchInput
        placeholder="Search patients by name or email"
        value={searchQuery}
        onChange={handleSearch}
      />
      <Tabs.Root defaultValue="all" className="flex flex-col gap-4">
        <Tabs.List className="border-border flex gap-8 border-b">
          {['All Patients', 'Active', 'Blocked'].map((tab) => (
            <Tabs.Tab
              key={tab}
              value={tab.toLowerCase().split(' ')[0]}
              className="text-foreground-subtle data-[selected]:border-primary data-[selected]:text-primary cursor-pointer border-b-2 border-transparent py-2 text-sm font-medium transition-colors outline-none"
              onClick={() => handleChangeTab(tab.toLowerCase().split(' ')[0])}
            >
              {tab}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <DataTable
          columns={dataTableColumns}
          data={filteredPatients}
          keyExtractor={(item) => item.id}
        />
      </Tabs.Root>
    </div>
  );
}
