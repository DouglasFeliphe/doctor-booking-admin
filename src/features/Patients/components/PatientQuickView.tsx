import {
  ExternalLink,
  TriangleAlert,
  // CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/button';
import { DialogContent, DialogRoot, DialogTrigger } from '@/components/dialog';
import type { Patient } from '../types/patient.types';

interface PatientQuickViewProps {
  // You can pass patient data as props if needed
  data: Patient;
  onClickSuspendPatientButton?: () => void;
  onClickFullProfileButton?: () => void;
}

export function PatientQuickView({
  data,
  onClickSuspendPatientButton,
  onClickFullProfileButton,
}: PatientQuickViewProps) {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="secondary" size="sm">
          View
        </Button>
      </DialogTrigger>

      <DialogContent>
        {/* Header / Profile Info */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <img
              src={data.avatar}
              alt={data.name}
              className="size-24 rounded-full object-cover border-4 border-surface shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-foreground">{data.name}</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 uppercase">
                <div className="size-1.5 rounded-full bg-green-600" />
                {data.status === 'active' ? 'Active' : 'Blocked'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 uppercase">
                <ShieldCheck className="size-3" />
                {data.isVerified ? 'Verified' : 'Unverified'}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-6 py-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Email Address
            </span>
            <span className="text-sm font-medium text-foreground">
              {data.email}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Phone Number
            </span>
            <span className="text-sm font-medium text-foreground">
              {/* +1 (555) 012-3456 */}
              {data.phone}
            </span>
          </div>
        </div>

        {/* Visit Stats */}
        <div className="grid grid-cols-2 divide-x divide-border rounded-2xl border border-border bg-muted/30 p-4">
          <div className="flex flex-col gap-1 pr-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Last Visit
            </span>
            <span className="text-sm font-bold text-foreground">
              {/* Oct 24, 2023 */}
              {data.lastVisitDate}
            </span>
            <span className="flex items-center gap-1 text-[10px] font-medium text-green-600">
              <div className="size-1 rounded-full bg-green-600" /> Completed
            </span>
          </div>
          <div className="flex flex-col gap-1 pl-4 text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Total Visits
            </span>
            <span className="text-sm font-bold text-foreground">
              {data.totalVisits ?? 0} Appointments
            </span>
          </div>
        </div>

        {/* Internal Note */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Latest Internal Note
          </span>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs italic leading-relaxed text-foreground-subtle">
              {data.lastInternalNote ??
                'No internal notes available for this patient.'}
            </p>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="flex items-start gap-3 rounded-xl bg-destructive/10 p-4 border border-destructive/20">
          <div className="rounded-lg bg-surface p-1.5 shadow-sm">
            <TriangleAlert className="size-4 text-destructive" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-destructive">
              Warning Flags
            </span>
            <span className="text-[11px] text-destructive/80">
              {data.missedAppointments ?? 0} missed appointments this year
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            variant="primary"
            className="w-full h-12 rounded-xl text-sm font-bold gap-2"
            onClick={onClickFullProfileButton}
          >
            View Full Profile
            <ExternalLink className="size-4" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-12 rounded-xl border border-destructive/20 text-destructive hover:bg-destructive/5 font-bold"
            onClick={onClickSuspendPatientButton}
          >
            Suspend Patient
          </Button>
        </div>
      </DialogContent>
    </DialogRoot>
  );
}
