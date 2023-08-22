import { useState } from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import ReposResults from './ReposResults';
import Message from './Message';

import { Repo } from '../../@types';

import './App.scss';

function App() {
  const fakeData = [
    {
      id: 28457823,
      name: 'freeCodeCamp',
      owner: {
        login: 'freeCodeCamp',
        avatar_url: 'https://avatars.githubusercontent.com/u/9892522?v=4',
      },
      description:
        "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    },
  ];
  const [repos, setRepos] = useState<Repo[]>(fakeData);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {repos && <ReposResults repoList={repos} />}
      <Message />
    </div>
  );
}

export default App;
