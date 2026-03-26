import { CircleX, Search } from 'lucide-react';
import { useRef, type Ref } from 'react';

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
  onSearch: (value: string) => void;
}

const SearchInput = ({
  placeholder,
  defaultValue,
  onSearch,
}: SearchInputProps) => {
  const searchInputRef = useRef<Ref<HTMLInputElement>>(null);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the current value of the input via the ref
    const query = searchInputRef.current?.value ?? '';

    // Pass the value to the search handler
    onSearch(query);

    console.log('Search initiated with:', query);
  }

  return (
    <form className="relative" onSubmit={(e) => handleSubmit(e)}>
      <Search className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />

      <input
        type="text"
        ref={searchInputRef}
        placeholder={placeholder ?? 'Search...'}
        defaultValue={defaultValue}
        className="bg-surface border-border focus-visible:ring-ring w-full rounded-xl border py-3 pr-4 pl-11 text-sm outline-none focus-visible:ring-2"
      />

      <CircleX
        className="text-muted-foreground absolute top-1/2 right-4 size-4 -translate-y-1/2 cursor-pointer"
        onClick={() => onSearch?.('')}
      />
    </form>
  );
};

export default SearchInput;
