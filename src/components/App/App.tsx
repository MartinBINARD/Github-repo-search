import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ReposResults from './ReposResults';
import Message from './Message';
import ButtonMore from './ButtonMore';

import { Repo } from '../../@types';
// import repos from '../../data/repos';

import './App.scss';

function App() {
  // État : est-ce que le formulaire est soumis ?
  // si le formulaire est soumis, je vais donner la valeur de mon
  // champ à ma variable
  // → si j'ai un string c'est que j'ai soumis mon formulaire
  const [doQuery, setDoQuery] = useState<string | null>(null);
  // État : pour stocker les résultats de l'API
  const [total, setTotal] = useState(0);
  const [repos, setRepos] = useState<Repo[]>([]);
  // const [nbrSearchResult, setNbrSearchResult] = useState(0);
  // const [loadResult, setLoadResult] = useState(1);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        // const response = await axios.get(
        //   'https://api.github.com/search/repositories?q=react'
        // );
        // console.log(response);

        // Axios retourne TOUJOURS le résultat de l'API
        // dans un objet avec la propriété `data`
        // on peut directement décomposer `response`
        // et assigner les résultats dans `data`
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=${doQuery}&sort=stars&order=desc&page=1&per_page=9`
        );

        setTotal(data.total_count);
        setRepos(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setDoQuery(null);
      }
    };

    // je n'appelle ma fonction uniquement à la soumission du formulaire
    if (doQuery) {
      getRepos();
    }
  }, [doQuery]);
  // je veux appeler mon effet (`getRepos`, mon appel API) uniquement
  // au montage (1er rendu, premier affichage du composant)
  // pour viser cette phase du cycle de vie, j'indique `[]`

  return (
    <div className="App">
      <Header />
      <SearchBar setDoQuery={setDoQuery} />
      <Message total={total} />
      <ReposResults list={repos} />
      {/* Affiche le loader au milieu de la page si premier chargement seulement
      {loading && repos.length === 0 ? (
        <Loader />
      ) : (
        <ReposResults list={repos} />
      )} */}
      {/* Affiche le bouton si seulement le premier chargement est fini.
      Permet de continuer d'afficher le bouton lorsque l'on veut plus de résultat
      Obtien loading en props pour le button loading spinner */}
      {/* {(!loading || repos.length > 0) && (
        <ButtonMore
          loading={loading}
          loadResult={loadResult}
          setLoadResult={setLoadResult}
        />
      )} */}
    </div>
  );
}

export default App;
