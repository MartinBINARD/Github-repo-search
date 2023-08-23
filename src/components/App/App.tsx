import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import ReposResults from './ReposResults';
import Message from './Message';
import ButtonMore from './ButtonMore';

import { Repo } from '../../@types';

import './App.scss';

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState('null');
  const [nbrSearchResult, setNbrSearchResult] = useState(0);
  const [loadResult, setLoadResult] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=${
            loadResult * 9
          }`
        );

        if (response) {
          setRepos(response.data.items);
          setNbrSearchResult(response.data.total_count);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepos();
  }, [search, loadResult]);

  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearch} />
      <Message search={search} nbrSearchResult={nbrSearchResult} />
      {repos && <ReposResults repoList={repos} />}
      <ButtonMore loadResult={loadResult} setLoadResult={setLoadResult} />
    </div>
  );
}

export default App;
