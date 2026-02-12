import { TriangleAlert } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from './button';
import { Dialog } from '@base-ui/react';
import { useConfirm } from '@/context/modalConfirmContext';

export function GlobalConfirmModal() {
  const { state, close } = useConfirm();

  const handleConfirm = async () => {
    await state.onConfirm();
    close();
  };

  return (
    <Dialog.Root open={state.isOpen} onOpenChange={close}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Popup
          data-slot="global-alert-popup"
          className={twMerge(
            'fixed left-1/2 top-1/2 z-[101] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface p-6 shadow-xl outline-none',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          )}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
                  <TriangleAlert className="size-5 text-destructive" />
                </div>
                <Dialog.Title className="text-xl font-bold text-foreground">
                  {state.title}
                </Dialog.Title>
              </div>

              <Dialog.Description className="text-base text-foreground-subtle leading-relaxed">
                {state.description}
              </Dialog.Description>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="destructive"
                className="h-12 w-full rounded-xl text-base font-bold"
                onClick={handleConfirm}
              >
                {state.confirmText || 'Cancel'}
              </Button>

              <Button
                variant="secondary"
                className="h-12 w-full rounded-xl text-base font-bold border-none bg-muted/50 hover:bg-muted"
                onClick={close}
              >
                {state.cancelText || 'Keep'}
              </Button>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
