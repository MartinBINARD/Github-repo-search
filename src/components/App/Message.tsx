interface MessageProps {
  search: string;
  nbrSearchResult: number;
}

function Message({ search, nbrSearchResult }: MessageProps) {
  return (
    <section className="message">
      <p className="message-content">
        {search !== 'null' && nbrSearchResult
          ? `La recherche a donné ${nbrSearchResult} résultats`
          : `Aucune recherche pour le moment`}
      </p>
    </section>
  );
}

export default Message;
