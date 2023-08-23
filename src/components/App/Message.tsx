import { Message } from 'semantic-ui-react';

interface MessageProps {
  search: string;
  nbrSearchResult: number;
}

function MessageSearch({ search, nbrSearchResult }: MessageProps) {
  return (
    <Message className="message">
      <p className="message-content">
        {search !== 'null' && nbrSearchResult > 0
          ? `La recherche a donné ${nbrSearchResult} résultats`
          : `Aucune recherche pour le moment`}
      </p>
    </Message>
  );
}

export default MessageSearch;
