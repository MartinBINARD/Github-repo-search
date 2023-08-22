import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Repo } from '../../@types';

interface ResultProps {
  repoList: Repo[];
}

function ReposResults({ repoList }: ResultProps) {
  const repos = repoList.map((repo) => (
    <li key={repo.id} className="repos-list-card">
      <Card>
        <Image src={repo.owner.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{repo.name}</Card.Header>
          <Card.Meta>{repo.owner.login}</Card.Meta>
          <Card.Description>{repo.description}</Card.Description>
        </Card.Content>
      </Card>
    </li>
  ));

  return (
    <section className="repos">
      <h2>Results</h2>
      <ul className="repos-list">{repos}</ul>
    </section>
  );
}

export default ReposResults;