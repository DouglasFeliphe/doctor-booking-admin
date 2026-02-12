import { useState } from 'react';
import { DataTable, type Column } from '@/components/DataTable';
import SearchInput from '@/components/SearchInput';
import { StatusBadge } from '@/components/StatusBadge';
import { Button } from '@/components/button';

interface Doctor {
  id: string;
  name: string;
  email?: string;
  avatar: string;
  specialty?: 'Cardiology' | 'Dermatology' | 'Neurology';
  status: 'active' | 'pending';
}

const doctors: Doctor[] = [
  {
    id: '#DOC-001',
    name: 'Sarah Jenkins',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
    specialty: 'Cardiology',
    status: 'active',
  },
  {
    id: '#DOC-002',
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704e',
    specialty: 'Dermatology',
    status: 'pending',
  },
  {
    id: '#DOC-003',
    name: 'Emily Davis',
    avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704f',
    specialty: 'Neurology',
    status: 'pending',
  },
];

// Definição das colunas para o componente genérico
const columnsForDataTable: Column<Doctor>[] = [
  {
    header: 'Doctor',
    accessor: (p) => (
      <div className="flex items-center gap-3">
        <img
          src={p.avatar}
          alt=""
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-foreground">{p.name}</span>
          <span className="text-foreground-subtle text-xs">{p.id}</span>
        </div>
      </div>
    ),
  },
  {
    header: 'Specialty',
    accessor: (p) => p.specialty,
  },
  {
    header: 'Status',
    accessor: (p) => <StatusBadge status={p.status}>{p.status}</StatusBadge>,
  },
  {
    header: 'Actions',
    align: 'right',
    accessor: (p) => (
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          View
        </Button>
        <Button
          variant={p.status === 'active' ? 'secondary' : 'primary'}
          size="sm"
        >
          {p.status === 'active' ? 'Block' : 'Unblock'}
        </Button>
      </div>
    ),
  },
];

export function Doctors() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(query: string) {
    setSearchQuery(query);
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  return (
    <div data-slot="patient-container" className="flex flex-col gap-6">
      <SearchInput
        placeholder="Search doctors by name or id"
        value={searchQuery}
        onChange={handleSearch}
      />

      <DataTable
        columns={columnsForDataTable}
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
}
