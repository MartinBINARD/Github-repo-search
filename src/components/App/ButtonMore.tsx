import { Button } from 'semantic-ui-react';

interface ButtonMoreProps {
  loading: boolean;
  loadResult: number;
  setLoadResult: React.Dispatch<React.SetStateAction<number>>;
}

function ButtonMore({ loading, loadResult, setLoadResult }: ButtonMoreProps) {
  const handleClick = () => {
    setLoadResult(loadResult + 1);
  };
  return (
    <Button onClick={handleClick} className="ui button">
      {loading && <i className="loading spinner icon" />}
      Plus de résultats
    </Button>
  );
}

export default ButtonMore;
