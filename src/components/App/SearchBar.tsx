import { useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

interface SearchBarProps {
  doSubmit: (search: string) => void;
}

function SearchBar({ doSubmit }: SearchBarProps) {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    doSubmit(search.trim());
  };

  return (
    <Segment>
      <Form role="search" onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher un dépôt…"
            aria-label="Rechercher un dépôt"
            role="searchbox"
            value={search}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
