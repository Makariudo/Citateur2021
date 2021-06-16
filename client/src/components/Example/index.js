import React, {useContext, useEffect, useCallback} from 'react';
import Citations from 'store/citations';
import Api from 'utils/fetch';
import './example.scss';
import image from 'assets/loupe.png';
import quoteStart from 'assets/ouvrantes_shadow_white.svg';
import quoteEnd from 'assets/fermantes_shadow_white.svg';


function Example() {
const {citations, setCitations} = useContext(Citations);
 
/* FETCH CITATION */

 const fetchCitation = useCallback(async() => {
  const citation = await Api.fetchCitations();
  console.log(citation);
  setCitations([citation])
},[setCitations])

useEffect(()=>{
 fetchCitation();
},[fetchCitation]) 

//console.log(citations[0], isLoading)
let citation = citations[0];
  return (

      <div className="container__citation">
        <h1 className="container__citation__h1">Citation du jour</h1>
        <article className="container__citation__article">
          <img src={quoteStart} className="quotes__start" />
              <p className="citation__text">{citation.citation}</p>
              <div className="citation__author">
                <p className="citation__author__name">{citation.auteur}</p>
                <img className="citation__author__img"src={citation.image} alt="auhor" />
              </div>
              <img src={quoteEnd} className="quotes__end" />   
        </article>
      </div>
      
       
   
  )
}

export default Example
