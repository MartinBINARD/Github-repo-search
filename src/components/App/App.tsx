import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import Loader from './Loader';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=${
            loadResult * 9
          }`
        );

        if (response) {
          setRepos(response.data.items);
          setNbrSearchResult(response.data.total_count);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchRepos();
  }, [search, loadResult]);

  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearch} />
      <Message search={search} nbrSearchResult={nbrSearchResult} />
      {/* Affiche le loader au milieu de la page si premier chargement seulement */}
      {loading && repos.length === 0 ? (
        <Loader />
      ) : (
        <ReposResults list={repos} />
      )}
      {/* Affiche le bouton si seulement le premier chargement est fini.
      Permet de continuer d'afficher le bouton lorsque l'on veut plus de résultat
      Obtien loading en props pour le button loading spinner */}
      {(!loading || repos.length > 0) && (
        <ButtonMore
          loading={loading}
          loadResult={loadResult}
          setLoadResult={setLoadResult}
        />
      )}
    </div>
  );
}

export default App;
