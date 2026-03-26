import { Avatar } from '@/components/Avatar';
import CustomTabs from '@/components/CustomTabs';
import { DataTable, type Column } from '@/components/DataTable';
import SearchInput from '@/components/SearchInput';
import { StatusBadge } from '@/components/StatusBadge';
import { Button } from '@/components/Button';
import { useConfirm } from '@/context/modalConfirmContext';
import { useTab } from '@/context/tabContext';
import { useState } from 'react';
import { DoctorQuickView } from './components/DoctorQuickView';
import type { Doctor, DoctorStatusTypes } from './types/doctor.types';

const MOCK_DOCTORS: Doctor[] = [
  {
    license: '#DOC-001',
    name: 'Sarah Jenkins',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
    specialty: 'Cardiology',
    education: 'Harvard Medical School',
    experience: '15 years',
    primaryClinic: 'Heart Care Clinic',
    languages: ['English', 'Spanish'],
    email: 'sarah.jenkins@heartcare.com',
    phone: '+1 (555) 123-4567',
    weeklySchedule: [
      { day: 'Monday', startTime: '09:00', endTime: '17:00' },
      { day: 'Wednesday', startTime: '10:00', endTime: '16:00' },
      { day: 'Friday', startTime: '08:00', endTime: '14:00' },
    ],
    scheduleType: ['in-person', 'telehealth'],
    status: 'active',
  },
  {
    license: '#DOC-002',
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704e',
    specialty: 'Dermatology',
    education: 'Stanford University School of Medicine',
    experience: '10 years',
    primaryClinic: 'Skin Health Center',
    languages: ['English', 'Mandarin'],
    email: 'michael.chen@skinhealth.com',
    phone: '+1 (555) 987-6543',
    weeklySchedule: [
      { day: 'Tuesday', startTime: '11:00', endTime: '19:00' },
      { day: 'Thursday', startTime: '09:00', endTime: '17:00' },
    ],
    scheduleType: ['telehealth'],
    status: 'pending',
  },
  {
    license: '#DOC-003',
    name: 'Emily Davis',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704f',
    specialty: 'Neurology',
    education: 'Johns Hopkins University School of Medicine',
    experience: '8 years',
    primaryClinic: 'Brain Wellness Clinic',
    languages: ['English', 'French'],
    email: 'emily.davis@brainwellness.com',
    phone: '+1 (555) 456-7890',
    weeklySchedule: [
      { day: 'Monday', startTime: '10:00', endTime: '18:00' },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
    ],
    scheduleType: ['in-person'],
    status: 'inactive',
  },

  {
    license: '#DOC-004',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704g',
    specialty: 'Neurology',
    education: 'Johns Hopkins University School of Medicine',
    experience: '8 years',
    primaryClinic: 'Brain Wellness Clinic',
    languages: ['English', 'French'],
    email: 'john.doe@brainwellness.com',
    phone: '+1 (555) 123-4567',
    weeklySchedule: [
      { day: 'Monday', startTime: '10:00', endTime: '18:00' },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00' },
    ],
    scheduleType: ['in-person', 'telehealth'],
    status: 'inactive',
  },
];

const actionText: Record<DoctorStatusTypes, string> = {
  active: 'Deactivate',
  pending: 'Approve',
  inactive: 'Activate',
};

export function Doctors() {
  const { confirm } = useConfirm();

  const { activeTab } = useTab();

  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  function handleStatusChange(doctor: Doctor) {
    confirm({
      title: `${actionText[doctor.status]} Doctor ${doctor.name}`,
      description: `Are you sure you want to ${actionText[doctor.status].toLowerCase()} doctor ${doctor.name}?`,
      confirmText: `${actionText[doctor.status]} Doctor`,
      cancelText: '',
      onConfirm: () => {
        console.log('Confirmed change status for:', doctor.name);
      },
    });
  }

  const columnsForDataTable: Column<Doctor>[] = [
    {
      header: 'Doctor',
      accessor: (doctor) => (
        <Avatar>
          <Avatar.Img src={doctor.avatar} alt={doctor.name} />
          <Avatar.Container>
            <Avatar.Name>{doctor.name}</Avatar.Name>
            <Avatar.Description>{doctor.license}</Avatar.Description>
          </Avatar.Container>
        </Avatar>
      ),
    },
    {
      header: 'Specialty',
      accessor: (doctor) => doctor.specialty,
    },
    {
      header: 'Status',
      accessor: (doctor) => (
        <StatusBadge status={doctor.status}>{doctor.status}</StatusBadge>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      accessor: (doctor) => (
        <div className="flex justify-end gap-2">
          {/* <Button variant="outline" size="sm">
          View
        </Button> */}

          <DoctorQuickView
            doctor={doctor}
            open={false}
            onOpenChange={function (): void {
              throw new Error('Function not implemented.');
            }}
          />

          <Button
            variant={doctor.status === 'active' ? 'secondary' : 'primary'}
            size="sm"
            onClick={() => handleStatusChange(doctor)}
          >
            {actionText[doctor.status]}
          </Button>
        </div>
      ),
    },
  ];

  const filteredDoctors = MOCK_DOCTORS.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.license.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'all' || doctor.status === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div data-slot="patient-container" className="flex flex-col gap-6">
      <SearchInput
        placeholder="Search doctors by name or id"
        onSearch={handleSearch}
      />

      <CustomTabs
        tabOptions={['All Doctors', 'Active', 'Pending', 'Inactive']}
      />

      <DataTable
        columns={columnsForDataTable}
        data={filteredDoctors}
        keyExtractor={(item) => item.license}
      />
    </div>
  );
}
