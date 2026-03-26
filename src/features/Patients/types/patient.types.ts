export interface Patient {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  lastVisitDate?: string;
  totalVisits?: number;
  lastInternalNote?: string;
  missedAppointments?: number;
  isVerified?: boolean;
  status: PatientStatusTypes;
}

export type PatientStatusTypes = 'active' | 'suspended' | 'pending';
