import { Input } from 'semantic-ui-react';

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ setSearch }: SearchProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = document.querySelector('input');

    if (input && input.value) {
      const filteredInput = input.value.trim().toLocaleLowerCase();

      setSearch(filteredInput);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        icon={{
          name: 'search',
        }}
        iconPosition="left"
        placeholder="Search..."
        className="search-input"
      />
    </form>
  );
}

export default SearchBar;
