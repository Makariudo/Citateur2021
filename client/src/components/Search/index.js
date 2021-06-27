import React, {useState, useContext, useRef, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from 'utils/fetch';
import CitationsContext from 'store/citations';
import Notifications from './Notifications';
import './search.scss';

const placeholder="Entrez le mot de votre choix pour obtenir une citation...";
const notifications = ["...searching...", "Aucune citation trouvée !"]

function Search() {
 const history = useHistory();
 const inputRef = useRef()
 const [input, setInput] = useState("");
 const {setCitations} = useContext(CitationsContext);
 const [notif, setNotif] = useState({
   show: false,
   message: notifications[0]
 })

 useEffect(()=> {
  inputRef.current.focus();
 },[])

  const handleSearch = async () => {
    setNotif({...notif, show: true});
    if(input.length <= 4){
      return;
    }
    const citations = await Api.fetchSearchCitations(input);
    if(citations.data.error){
      setNotif({...notif, message: notifications[1]});
      return;
    }
    let path = `/explore/${input}`; 
    console.log("citations:", citations)
    setCitations(citations.data)
    setNotif({message: notifications[0], show: false});
    history.push(path);
  };

  const handleChange = (e) => {
    setNotif({message: notifications[0], show: false});
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
      <Notifications show={notif.show} message={notif.message} />

    </div>
  )
}

export default Search
