import { Card, Icon, Image } from 'semantic-ui-react';
import { Repo } from '../../@types';

interface ReposResultsProps {
  list: Repo[];
}

function ReposResults({ list }: ReposResultsProps) {
  const items = list.map((repo) => (
    <Card key={repo.id} as="article">
      <Image src={repo.owner.avatar_url} wrapped ui={false} />

      <Card.Content>
        <Card.Header as="h2">{repo.name}</Card.Header>
        <Card.Meta as="h3">{repo.owner.login}</Card.Meta>
        {repo.description && (
          <Card.Description as="p">{repo.description}</Card.Description>
        )}
      </Card.Content>

      <Card.Content extra>
        <a href={repo.html_url} target=" _blank" rel="noopener noreferrer">
          <Icon name="github alternate" />
          Voir sur GitHub
        </a>
      </Card.Content>
    </Card>
  ));

  return (
    <Card.Group as="section" itemsPerRow={3} stackable>
      {items}
    </Card.Group>
  );
}

export default ReposResults;
