import { CircleX, Search } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className="bg-surface border-border focus-visible:ring-ring w-full rounded-xl border py-3 pr-4 pl-11 text-sm outline-none focus-visible:ring-2"
        onChange={(e) => onChange?.(e.target.value)}
      />

      <CircleX
        className="text-muted-foreground absolute top-1/2 right-4 size-4 -translate-y-1/2 cursor-pointer"
        onClick={() => onChange?.('')}
      />
    </div>
  );
};

export default SearchInput;
