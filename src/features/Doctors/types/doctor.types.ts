export interface Doctor {
  license: string;
  name: string;
  email: string;
  avatar: string;
  specialty: string;
  education: string;
  experience?: string;
  primaryClinic?: string;
  languages: string[];
  phone: string;
  weeklySchedule?: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  scheduleType: ScheduleTypes[];
  status: DoctorStatusTypes;
}

export type DoctorStatusTypes = 'active' | 'pending' | 'inactive';

type ScheduleTypes = 'telehealth' | 'in-person';
