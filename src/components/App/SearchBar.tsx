import { Input } from 'semantic-ui-react';

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ search, setSearch }, SearchProps) {
  return (
    <section className="search">
      <Input
        icon={{ name: 'search', circular: true, link: true }}
        placeholder="Search..."
        className="search-input"
      />
    </section>
  );
}

export default SearchBar;
