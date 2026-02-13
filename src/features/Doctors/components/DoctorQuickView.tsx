import { Button } from '@/components/button';
import { DialogContent, DialogRoot, DialogTrigger } from '@/components/dialog';
import {
  Ban,
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardClock,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import type { Doctor } from '../types/doctor.types';

interface DoctorQuickViewProps {
  doctor: Doctor;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const doctorStatusBaseStyle =
  'flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold border';

const renderDoctorStatus = (status: Doctor['status']) => {
  switch (status) {
    case 'active':
      return (
        <div
          className={`${doctorStatusBaseStyle} border-green-500 bg-green-50 text-green-700`}
        >
          <CheckCircle2 className="size-4" /> Active
        </div>
      );
    case 'pending':
      return (
        <div
          className={`${doctorStatusBaseStyle} border-amber-500 bg-amber-50 text-amber-700`}
        >
          <ClipboardClock className="size-4" /> Pending Administrative Review
        </div>
      );
    case 'inactive':
      return (
        <div
          className={`${doctorStatusBaseStyle} border-red-500 bg-red-50 text-red-700`}
        >
          <Ban className="size-4" /> Inactive
        </div>
      );
  }
};

export function DoctorQuickView({ doctor }: DoctorQuickViewProps) {
  const {
    license,
    name,
    avatar,
    specialty,
    education,
    experience,
    primaryClinic,
    languages,
    email,
    phone,
    weeklySchedule,
    status,
  } = doctor;

  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="secondary" size="sm">
          View
        </Button>
      </DialogTrigger>

      <DialogContent>
        {/* Header Profile */}
        <div className="flex flex-col gap-4 h-auto max-h-[80vh] overflow-y-auto rounded-lg my-8 px-4">
          <div className="flex flex-col items-center gap-4 text-center border-b border-border pb-6">
            <img
              src={avatar}
              alt={name}
              className="size-24 rounded-full object-cover border-4 border-blue-50 shadow-sm"
            />
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-foreground">Dr. {name}</h2>
              <div className="flex flex-col items-center gap-1">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <ShieldCheck className="size-4" /> {specialty}
                </span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                  License: {license}
                </span>
              </div>
            </div>

            {/* {status === 'pending' && (
              <div className="flex items-center gap-2 rounded-lg bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 border border-amber-100">
                <Briefcase className="size-4" /> Pending Administrative Review
              </div>
            )} */}

            {renderDoctorStatus(status)}
          </div>

          {/* Personal Information Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground">
              Personal Information
            </h3>
            <div className="rounded-xl border border-border bg-muted/20 overflow-hidden text-sm">
              {[
                {
                  label: 'Education',
                  value: education,
                  icon: GraduationCap,
                },
                {
                  label: 'Experience',
                  value: experience,
                  icon: Briefcase,
                },
                {
                  label: 'Primary Clinic',
                  value: primaryClinic,
                  icon: MapPin,
                },
                {
                  label: 'Languages',
                  value: languages?.join(', '),
                  icon: Languages,
                },
              ].map((info, i) => (
                <div
                  key={i}
                  className="flex border-b border-border last:border-0 p-4 items-center"
                >
                  <span className="w-1/3 text-muted-foreground font-medium flex items-center gap-2">
                    <info.icon className="size-4 opacity-50" /> {info.label}
                  </span>
                  <span className="w-2/3 text-foreground font-semibold">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground">
              Availability Summary
            </h3>
            <div className="flex items-center justify-between rounded-xl border border-border bg-muted/20 p-6">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">
                    Weekly Schedule
                  </p>

                  {weeklySchedule && weeklySchedule.length > 0 ? (
                    <div className="space-y-1">
                      {weeklySchedule.map((schedule, index) => (
                        <p
                          key={index}
                          className="text-xs text-muted-foreground"
                        >
                          {schedule.day}: {schedule.startTime} -{' '}
                          {schedule.endTime}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      No schedule available
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold text-primary uppercase">
                    Telehealth
                  </span>
                  <span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-bold text-primary uppercase">
                    In-Person
                  </span>
                </div>
              </div>
              <div className="size-14 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <Calendar className="size-8" />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-foreground">
              Contact Details
            </h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface">
                <div className="bg-blue-50 p-2 rounded-lg text-primary">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm font-semibold">{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface">
                <div className="bg-blue-50 p-2 rounded-lg text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">
                    Phone
                  </p>
                  <p className="text-sm font-semibold">{phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Actions */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button
              variant="destructive"
              className="h-14 rounded-xl font-bold gap-2 text-base"
            >
              <Ban className="size-5" /> Suspend
            </Button>
            <Button className="h-14 rounded-xl bg-teal-500 hover:bg-teal-600 border-none text-white font-bold gap-2 text-base">
              <CheckCircle2 className="size-5" /> Approve
            </Button>
          </div>
        </div>
      </DialogContent>
    </DialogRoot>
  );
}
