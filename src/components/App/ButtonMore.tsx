import { Button } from 'semantic-ui-react';

interface ButtonMoreProps {
  loadResult: number;
  setLoadResult: React.Dispatch<React.SetStateAction<number>>;
}

function ButtonMore({ loadResult, setLoadResult }: ButtonMoreProps) {
  const handleClick = () => {
    setLoadResult(loadResult + 1);
  };
  return (
    <Button onClick={handleClick} className="ui button">
      Plus de résultats
    </Button>
  );
}

export default ButtonMore;
