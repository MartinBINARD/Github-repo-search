import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Repo } from '../../@types';

interface ResultProps {
  list: Repo[];
}

function ReposResults({ list }: ResultProps) {
  const items = list.map((repo) => (
    <Card key={repo.id} as="article">
      <Image src={repo.owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header as="h2">{repo.name}</Card.Header>
        <Card.Meta as="h3">{repo.owner.login}</Card.Meta>
        <Card.Description as="p">{repo.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a
          href={repo.owner.html_url}
          target=" _blank"
          rel="noopener noreferrer"
        >
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
