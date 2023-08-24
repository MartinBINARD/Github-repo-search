import { Message as MessageSemanticUI } from 'semantic-ui-react';

interface MessageProps {
  search: string;
  nbrSearchResult: number;
}

function Message({ search, nbrSearchResult }: MessageProps) {
  return (
    <MessageSemanticUI>
      <p className="message-content">
        {search !== 'null' && nbrSearchResult > 0
          ? `La recherche a donné ${nbrSearchResult} résultats`
          : `Aucune recherche pour le moment`}
      </p>
    </MessageSemanticUI>
  );
}

export default Message;
