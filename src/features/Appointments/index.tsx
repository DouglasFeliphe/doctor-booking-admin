import { Avatar } from '@/components/Avatar';
import CustomTabs from '@/components/CustomTabs';
import { DataTable, type Column } from '@/components/DataTable';
import { FilterBar } from '@/components/FilterBar';
import SearchInput from '@/components/SearchInput';
import { StatusBadge } from '@/components/StatusBadge';
import { Button } from '@/components/ui/button';
import { useTabContext } from '@/context/tabContext';
import { MapPin, Video } from 'lucide-react';
import { useState } from 'react';
import { PatientQuickView } from '../Patients/components/PatientQuickView';
import type { Appointment } from './types/appointment.types';

const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    patientName: 'Johnnathan Doe',
    patientEmail: 'john.doe@example.com',
    patientAvatar: 'https://i.pravatar.cc/300?u=a042581f4e290267045',
    doctorName: 'Dr. Sarah Wilson',
    doctorSpecialty: 'Cardiologist',
    date: 'Oct 24, 2026, 10:00 AM',
    status: 'scheduled' as const,
    consultationType: 'online',
    paymentStatus: 'paid',
    flags: ['no-show history', 'disputes'],
  },
  {
    id: '2',
    patientName: 'Emily Blunt',
    patientEmail: 'emily.blunt@example.com',
    patientAvatar: 'https://i.pravatar.cc/300?u=a042581f4e290267046',
    doctorName: 'Dr. Michael Chen',
    doctorSpecialty: 'Dermatologist',
    date: 'Oct 24, 2026, 09:15 AM',
    status: 'completed' as const,
    consultationType: 'in-person',
    paymentStatus: 'pending',
    flags: ['no-show history'],
  },

  {
    id: '3',
    patientName: 'Michael Johnson',
    patientEmail: 'michael.johnson@example.com',
    patientAvatar: 'https://i.pravatar.cc/300?u=a042581f4e290267047',
    doctorName: 'Dr. Emily Brown',
    doctorSpecialty: 'Pediatrician',
    date: 'Oct 24, 2026, 11:30 AM',
    status: 'cancelled' as const,
    consultationType: 'online',
    paymentStatus: 'pending',
    flags: ['no-show history', 'disputes'],
  },
  // ... outros itens
];

export function Appointments() {
  const { activeTab } = useTabContext();

  const [searchQuery, setSearchQuery] = useState('');

  const [activeFilters, setActiveFilters] = useState({
    date: 'today',
    status: 'all',
  });
  console.log('activeFilters :', activeFilters);

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  const handleFilterChange = (id: string, value: string) => {
    setActiveFilters((prev) => ({ ...prev, [id]: value }));
  };

  const filters = [
    {
      id: 'date',
      label: 'Date',
      options: [
        { label: 'Today', value: 'today' },
        { label: 'This Week', value: 'week' },
        { label: 'All Time', value: 'all' },
      ],
    },
    // {
    //   id: 'status',
    //   label: 'Status',
    //   options: [
    //     { label: 'All', value: 'all' },
    //     { label: 'Scheduled', value: 'scheduled' },
    //     { label: 'Completed', value: 'completed' },
    //     { label: 'Cancelled', value: 'cancelled' },
    //   ],
    // },
  ];

  const dataTableColumns: Column<Appointment>[] = [
    {
      header: 'Patient',
      accessor: (appointment) => (
        <Avatar>
          <Avatar.Img src={appointment.patientAvatar} />
          <Avatar.Container>
            <Avatar.Name>{appointment.patientName}</Avatar.Name>
            <Avatar.Description>
              ID: {appointment.patientEmail}
            </Avatar.Description>
          </Avatar.Container>
        </Avatar>
      ),
    },
    {
      header: 'Doctor',
      accessor: (appointment) => (
        <Avatar>
          <Avatar.Img src={appointment.patientAvatar} />
          <Avatar.Container>
            <Avatar.Name>{appointment.doctorName}</Avatar.Name>
            <Avatar.Description>
              {appointment.doctorSpecialty}
            </Avatar.Description>
          </Avatar.Container>
        </Avatar>
      ),
    },

    {
      header: 'Date',
      accessor: (appointment) => (
        <>
          <div>
            {appointment.date.split(',')[0]}, {appointment.date.split(',')[1]}
          </div>

          <div></div>

          <div>{appointment.date.split(',')[2]}</div>
        </>
      ),
    },

    {
      header: 'Status',
      accessor: (appointment) => (
        <StatusBadge status={appointment.status} className="uppercase">
          {appointment.status}
        </StatusBadge>
      ),
    },
    {
      header: 'Consultation Type',
      accessor: (appointment) => (
        <div className="capitalize flex items-center gap-2">
          {appointment.consultationType === 'in-person' && (
            <MapPin className="h-4 w-4 text-gray-500" />
          )}
          {appointment.consultationType === 'online' && (
            <Video className="h-4 w-4 text-gray-500" />
          )}
          {appointment.consultationType}
        </div>
      ),
    },

    {
      header: 'Payment Status',
      accessor: (appointment) => (
        <StatusBadge
          status={appointment.paymentStatus}
          className="capitalize bg-transparent"
        >
          {appointment.paymentStatus}
        </StatusBadge>
      ),
    },
    {
      header: 'Actions',
      align: 'right',
      accessor: (appointment) => (
        <div className="flex items-center gap-2 justify-end">
          <PatientQuickView data={appointment} />

          <Button
            size="sm"
            // variant="outline"
            onClick={() => handleCancelClick(appointment)}
          >
            {appointment.status === 'scheduled' ? 'Cancel' : 'Reschedule'}
          </Button>
        </div>
      ),
    },
  ];

  const filteredAppointments = MOCK_APPOINTMENTS.filter((appointment) => {
    const matchesSearch =
      appointment.doctorName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'all' || appointment.status === activeTab;

    const matchesDate = activeFilters['date'] === 'all' || true;

    return matchesSearch && matchesTab && matchesDate;
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <SearchInput
          placeholder="Search doctors by name or id"
          onSearch={handleSearch}
        />

        <CustomTabs
          tabOptions={['All', 'Scheduled', 'Completed', 'Cancelled']}
        />

        <FilterBar
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
        />

        {/* <AppointmentList data={filteredAppointments} /> */}

        <DataTable
          columns={dataTableColumns}
          data={filteredAppointments}
          keyExtractor={(item) => item.id}
        />
      </div>

      {/* <ResourceManager
          title={`Appointments (${MOCK_DATA.length})`}
          data={MOCK_DATA}
          // ... restante das configurações genéricas
        /> */}
    </div>
  );
}
function handleCancelClick(data: Appointment): void {
  console.log('data :', data);
  throw new Error('Function not implemented.');
}
