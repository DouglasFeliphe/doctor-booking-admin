import { Select } from '@base-ui/react/select';

import type {
  SelectRootProps,
  SelectTriggerProps,
} from '@base-ui/react/select';
import { ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function SelectRoot<Value = string, Multiple extends boolean = false>(
  props: SelectRootProps<Value, Multiple>,
) {
  return <Select.Root {...props} />;
}

export function SelectTrigger({
  children,
  className,
  ...props
}: SelectTriggerProps) {
  return (
    <Select.Trigger
      data-slot="select-trigger"
      className={twMerge(
        'inline-flex h-10 items-center justify-between gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      {...props}
    >
      <Select.Value>{children}</Select.Value>
      <Select.Icon>
        <ChevronDown className="size-4 text-muted-foreground" />
      </Select.Icon>
    </Select.Trigger>
  );
}

export function SelectContent({
  children,
  className,
  ...props
}: Select.PopupProps) {
  return (
    <Select.Portal>
      <Select.Positioner sideOffset={8}>
        <Select.Popup
          className={twMerge(
            'z-50 min-w-[140px] overflow-hidden rounded-xl border border-border bg-surface p-1 shadow-lg outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            className,
          )}
          {...props}
        >
          {children}
        </Select.Popup>
      </Select.Positioner>
    </Select.Portal>
  );
}

export function SelectItem({
  children,
  className,
  ...props
}: Select.ItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'flex cursor-pointer items-center rounded-lg px-3 py-2 text-sm outline-none transition-colors data-[highlighted]:bg-muted data-[selected]:text-primary font-medium',
        className,
      )}
      {...props}
    >
      {children}
    </Select.Item>
  );
}
