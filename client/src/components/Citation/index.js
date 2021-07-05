import React, {useState, useContext} from 'react'
import API from "utils/fetch";
import Snack from 'store/snack';
import './citation.scss';
import quoteStart from 'assets/ouvrantes_shadow_white.svg';
import plus from 'assets/plus_citateur.svg';
import quoteEnd from 'assets/fermantes_shadow_white.svg';
import {subQuotes} from 'utils/getSearchAndReturn';


function Citation({citation}) {
  const [add, setAdd] = useState(false)
  const {setSnack} = useContext(Snack)
  
  const handleClick = async () => {
    setAdd(true);
    try {
     const reponse = await API.addCitation(citation); 
     if(reponse.status===200){
      setSnack({
        type:"info",
        message:"Citation ajoutée !"
      })
     }
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div>
       <article className="container__citation__article">
          <img src={quoteEnd} className="quotes__start" alt="quote"/>
              <p className="citation__text">{subQuotes(citation.citation)}</p>
              <div className="citation__author">
                <p className="citation__author__name">{citation.auteur}</p>
                {citation.image && <img className="citation__author__img"src={citation.image} alt="auhor" />} 
                {!add && <img src={plus} className="citation__plus" alt="add citation" onClick={handleClick}/>}        
              </div>
              <img src={quoteStart} className="quotes__end" alt="quote"/>   
        </article>
    </div>
  )
}

export default Citation
