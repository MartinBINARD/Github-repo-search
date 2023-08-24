import { Form, Input, Segment } from 'semantic-ui-react';

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
    <Segment>
      <Form role="search">
        <Form.Field>
          <Input
            icon="search"
            inconPosition="left"
            placeholder="Rechercher un dépôt..."
            aria-label="Recherche un dépôt"
            role="searchbox"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
