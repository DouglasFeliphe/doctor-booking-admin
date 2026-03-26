import type { Appointment } from '../types/appointment.types';
import { AppointmentItem } from './appointment-item';

interface AppointmentListProps {
  data: Appointment[];
}
export function AppointmentList({ data }: AppointmentListProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-foreground">
          Appointments ({data.length})
        </h3>
        <div className="flex flex-col gap-3">
          {data.map((appointment) => (
            <AppointmentItem key={appointment.id} data={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
}
