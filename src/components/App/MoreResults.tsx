import { Button, Segment } from 'semantic-ui-react';

interface MoreResultsProps {
  nextPage: () => void;
}

function MoreResults({ nextPage }: MoreResultsProps) {
  return (
    <Segment textAlign="center">
      <Button onClick={nextPage}>Plus de résultats</Button>
    </Segment>
  );
}

export default MoreResults;
