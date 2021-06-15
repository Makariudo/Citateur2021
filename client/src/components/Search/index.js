import React from 'react';
import './search.scss';
import logoSearch from 'assets/search.png';
import loupe from 'assets/loupe.png';

const placeholder="Entrez le mot de votre choix pour obtenir une citation...";

function Search() {
  const handleSearch = () => {
    console.log('click!');
  }
  return (
    <div className="searchBar">
      <p className="searchBar__title"><span className="strong">Citateur</span><span className="italic">, le distributeur de citations</span></p>
      <div className="searchBar__inputBlock">
        <input type="text" name="search" className="searchBar__input" placeholder={placeholder} />
        <img className="loupe" src={loupe} onClick={handleSearch} />
      </div>
    </div>
  )
}

export default Search
