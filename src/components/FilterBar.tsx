import { ListFilter } from 'lucide-react';
import { Button } from './Button';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger } from './Select';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

interface FilterBarProps {
  filters: FilterGroup[];
  activeFilters: Record<string, string>;
  onFilterChange: (id: string, value: string) => void;
  onOpenFilterSettings?: () => void;
}

export function FilterBar({
  filters,
  activeFilters,
  onFilterChange,
  onOpenFilterSettings,
}: FilterBarProps) {
  return (
    <div data-slot="filter-bar" className="flex items-center gap-2">
      {filters.map((group) => (
        <SelectRoot
          key={group.id}
          value={activeFilters[group.id]}
          onValueChange={(val) => onFilterChange(group.id, val ?? '')}
        >
          <SelectTrigger className="min-w-[140px]">
            {group.label}:{' '}
            {group.options.find((opt) => opt.value === activeFilters[group.id])
              ?.label || 'All'}
          </SelectTrigger>
          <SelectContent>
            {group.options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      ))}

      <Button
        variant="secondary"
        size="md"
        aria-label="More filters"
        onClick={onOpenFilterSettings}
      >
        <ListFilter className="size-4" />
      </Button>
    </div>
  );
}
