import { Message as MessageSemanticUI } from 'semantic-ui-react';

interface MessageProps {
  total: number;
  doQuery: string | null;
}

function Message({ total, doQuery }: MessageProps) {
  return (
    <MessageSemanticUI>
      {doQuery
        ? `La recherche a retourné ${total} résultats`
        : 'Rechercher un dépôt sur GitHub'}
    </MessageSemanticUI>
  );
}

export default Message;
