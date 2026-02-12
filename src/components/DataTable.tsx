import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './button';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  className?: string;
  align?: 'left' | 'right' | 'center';
}

export interface DataTableProps<T> extends ComponentProps<'div'> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  className,
  ...props
}: DataTableProps<T>) {
  return (
    <div
      data-slot="data-table-container"
      className={twMerge(
        'overflow-hidden rounded-xl border border-border bg-surface',
        className,
      )}
      {...props}
    >
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/50 text-foreground-subtle border-b border-border text-xs font-semibold uppercase tracking-wider">
          <tr>
            {columns.map((column, idx) => (
              <th
                key={idx}
                className={twMerge(
                  'px-6 py-4',
                  column.align === 'right' && 'text-right',
                  column.align === 'center' && 'text-center',
                  column.className,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((item) => (
            <tr
              key={keyExtractor(item)}
              className="hover:bg-muted/30 transition-colors"
            >
              {columns.map((column, idx) => (
                <td
                  key={idx}
                  className={twMerge(
                    'px-6 py-4',
                    column.align === 'right' && 'text-right',
                    column.align === 'center' && 'text-center',
                  )}
                >
                  {typeof column.accessor === 'function'
                    ? column.accessor(item)
                    : (item[column.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-border flex items-center justify-between border-t px-6 py-4">
        <span className="text-foreground-subtle text-sm">
          Showing <b>1 - {data?.length || 0}</b> of <b>{data?.length || 0}</b>{' '}
          items
        </span>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" aria-label="Previous page">
            <ChevronLeft />
          </Button>
          <Button variant="primary" size="sm">
            1
          </Button>
          <Button variant="secondary" size="sm">
            2
          </Button>
          <Button variant="secondary" size="sm" aria-label="Next page">
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
