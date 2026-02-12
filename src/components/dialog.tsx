import { Dialog, type DialogPopupProps } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;

interface DialogContentProps extends DialogPopupProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Popup
        data-slot="dialog-content"
        className={twMerge(
          'fixed left-[50%] top-[50%] z-50 flex w-full max-w-[440px] translate-x-[-50%] translate-y-[-50%] flex-col gap-6 border border-border bg-surface p-8 shadow-lg duration-200 rounded-3xl outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close
          aria-label="Fechar"
          className="absolute right-6 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-muted-foreground"
        >
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}
