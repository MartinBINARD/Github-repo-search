import { Message as MessageSemanticUI } from 'semantic-ui-react';

interface MessageProps {
  total: number;
}

function Message({ total }: MessageProps) {
  return (
    <MessageSemanticUI>
      La recherche a retourné {total} résultats
    </MessageSemanticUI>
  );
}

export default Message;
