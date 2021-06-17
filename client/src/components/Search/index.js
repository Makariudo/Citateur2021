import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Api from 'utils/fetch'
import CitationsContext from 'store/citations'
import './search.scss';
import loupe from 'assets/loupe.png';


const placeholder="Entrez le mot de votre choix pour obtenir une citation...";

function Search() {
 const history = useHistory();
 const {setCitations} = useContext(CitationsContext);
 const [input, setinput] = useState('')


  const handleSearch = async () => {
    console.log("searching...")
    const citations = await Api.fetchSearchCitations(input);
    let path = `/explore`; 
    history.push(path);
    console.log("citations:", citations)
    setCitations(citations.data)
  }
  return (
    <div className="searchBar">
      <p className="searchBar__title"><span className="strong">Citateur</span><span className="italic">, le distributeur de citations</span></p>
      <div className="searchBar__inputBlock">
        <input 
          type="text" 
          name="search" 
          className="searchBar__input" 
          placeholder={placeholder} 
          onChange={e => setinput(e.target.value)}/>
        <img className="loupe" src={loupe} onClick={handleSearch} alt="search"/>
      </div>
    </div>
  )
}

export default Search
