import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import ReposResults from './ReposResults';
import Message from './Message';

import { Repo } from '../../@types';

import './App.scss';

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState<string>('null');

  async function fetchRepos() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`
      );

      if (response) {
        setRepos(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <Message />
      {repos && <ReposResults repoList={repos} />}
    </div>
  );
}

export default App;
