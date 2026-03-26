import { ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { ComponentProps } from 'react';
import { AppointmentStatus } from './appointment-status';
import type { Appointment } from '../types/appointment.types';

export interface AppointmentItemProps extends ComponentProps<'div'> {
  data: Appointment;
}

export function AppointmentItem({
  data,
  className,
  ...props
}: AppointmentItemProps) {
  const { patientName, patientAvatar, doctorName, date, status } = data;

  return (
    <div
      data-slot="appointment-item"
      className={twMerge(
        'group flex cursor-pointer items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-muted/50',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <img
          src={patientAvatar}
          alt={patientName}
          className="size-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="text-sm font-bold text-foreground">{patientName}</h4>
          <AppointmentStatus variant={status}>
            {status === 'scheduled'
              ? 'Scheduled'
              : status === 'completed'
                ? 'Completed'
                : 'Cancelled'}
          </AppointmentStatus>
          <p className="text-xs text-foreground-subtle">
            {doctorName} • {date}
          </p>
        </div>
      </div>
      <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </div>
  );
}
