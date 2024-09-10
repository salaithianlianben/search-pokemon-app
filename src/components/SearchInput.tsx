import { useState, useEffect } from 'react';

interface SearchInputProps {
  onSearch: (term: string) => void;
  initialValue: string;
}

export default function SearchInput({ onSearch, initialValue }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Pokémon name"
        className="border rounded-l p-2 flex-grow"
        aria-label="Search Pokémon"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
}