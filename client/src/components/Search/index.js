import React, {useState, useContext, useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Api from 'utils/fetch';
import CitationsContext from 'store/citations';
import UIContext from 'store/ui';
import './search.scss';
import loupe from 'assets/loupe.png';


const placeholder="Entrez le mot de votre choix pour obtenir une citation...";

function Search() {
 const history = useHistory();
 const inputRef = useRef()
 const {setCitations} = useContext(CitationsContext);
 const {input, setInput} = useContext(UIContext)
 const [note, setNote] = useState(false)

 useEffect(()=> {
  inputRef.current.focus();
 },[note])

  const handleSearch = async () => {
    if(input.length <= 4){
      return;
    }
    const citations = await Api.fetchSearchCitations(input);
    if(citations.data.error){
      setNote(true);
      return;
    }
    let path = `/explore`; 
    history.push(path);
    console.log("citations:", citations)
    setCitations(citations.data)
  };

  const handleChange = (e) => {
    setNote(false)
    setInput(e.target.value)
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
          value={input}
          onChange={handleChange}
          ref={inputRef}
          />
        {/*<img className="loupe" src={loupe} onClick={handleSearch} alt="search"/>*/}
        <div className="loupe_try" onClick={handleSearch}> </div>
      </div>
      <span className={note ? "searchBar__notif":"searchBar__notif hidden"}>Citations introuvable avec ce mot !</span>
    </div>
  )
}

export default Search
