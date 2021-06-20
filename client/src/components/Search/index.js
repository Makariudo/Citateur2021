import React, {useState, useContext, useRef, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from 'utils/fetch';
import CitationsContext from 'store/citations';
import UIContext from 'store/ui';
import Notifications from './Notifications';
import './search.scss';

const placeholder="Entrez le mot de votre choix pour obtenir une citation...";

function Search() {
 const history = useHistory();
 const {mot} = useParams();
 const inputRef = useRef()
 const [input, setInput] = useState("");
 const {setCitations} = useContext(CitationsContext);
 const {isLoading, toggleIsLoading} = useContext(UIContext)
 const [notif, setNotif] = useState(false)

 useEffect(()=> {
  inputRef.current.focus();
 },[notif])

  const handleSearch = async () => {
    console.log("ava,t le premier toggle", isLoading)
    toggleIsLoading()
    console.log("après le premier toggle", isLoading)

    if(input.length <= 4){
      return;
    }
    const citations = await Api.fetchSearchCitations(input);
    if(citations.data.error){
      console.log("ava,t le premier toggle error", isLoading)

      toggleIsLoading()
      console.log("après le premier toggle error", isLoading)

      setNotif(true);
      return;
    }
    let path = `/explore/${input}`; 
    console.log("citations:", citations)
    setCitations(citations.data)
    console.log("ava,nt le deuxieme toggle isloading", isLoading)

    toggleIsLoading();
    console.log("après le toggle juste ava,nt le push path", isLoading)

    history.push(path);
  };

  const handleChange = (e) => {
    setNotif(false)
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
        <div className="loupe_try" onClick={handleSearch}> </div>
      </div>
      <Notifications show={isLoading} message={"...search..."}/>
      {notif && <Notifications show message={"pas de résultats"}/>
}

    </div>
  )
}

export default Search
