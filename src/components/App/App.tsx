import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import Message from './Message';
import ReposResults from './ReposResults';

import logo from '../../assets/images/logo-github.png';

import './App.scss';
import MoreResults from './MoreResults';

import { Repo } from '../../@types';

function App() {
  const [doQuery, setDoQuery] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getRepos() {
      try {
        // je previens Axios du type de la réponse
        const { data } = await axios.get<{
          total_count: number;
          items: Repo[];
        }>(
          `https://api.github.com/search/repositories?q=${doQuery}&sort=stars&order=desc&page=${page}&per_page=9`
        );

        // const newRepos: Repo[] = data.items;

        setTotal(data.total_count);
        // ici : je REMPLACE mes repos courants par les nouveaux
        // setRepos(data.items);
        // je veux AJOUTER les nouveaux aux ancien
        setRepos([
          ...repos, // je déverse les repos actuels
          ...data.items, // j'ajoute les nouveaux
        ]);
        // https://www.gekkode.com/developpement/2-facons-de-fusionner-des-tableaux-en-javascript/
      } catch (error) {
        console.error(error);
      } finally {
        // setDoQuery(null);
      }
    }

    if (doQuery) {
      getRepos();
    }
  }, [doQuery, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <header className="header">
        <Image src={logo} alt="Logo GitHub" size="small" centered />
      </header>

      <SearchBar setDoQuery={setDoQuery} />
      <Message total={total} doQuery={doQuery} />
      <ReposResults list={repos} />

      {total > 9 && <MoreResults nextPage={nextPage} />}
    </div>
  );
}

export default App;
