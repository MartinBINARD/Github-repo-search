import { Button, Segment } from 'semantic-ui-react';

interface ButtonMoreProps {
  loading: boolean;
  loadRepos: number;
  setLoadRepos: React.Dispatch<React.SetStateAction<number>>;
}

function ButtonMore({ loading, loadRepos, setLoadRepos }: ButtonMoreProps) {
  const handleClick = () => {
    setLoadRepos(loadRepos + 1);
  };
  return (
    <Segment>
      <Button onClick={handleClick} className="primary fluid">
        {loading && <i className="loading spinner icon" />}
        Plus de résultats
      </Button>
    </Segment>
  );
}

export default ButtonMore;
