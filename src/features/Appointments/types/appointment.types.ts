export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientAvatar: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  status: AppointmentStatusTypes;
  consultationType: 'online' | 'in-person';
  paymentStatus: 'paid' | 'pending' | 'refunded';
  flags: string[];
}

export type AppointmentStatusTypes = 'scheduled' | 'completed' | 'cancelled';
