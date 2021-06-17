import React from 'react'
import './citation.scss';
import quoteStart from 'assets/ouvrantes_shadow_white.svg';
import quoteEnd from 'assets/fermantes_shadow_white.svg';
import {subQuotes} from 'utils/getSearchAndReturn';

function Citation({citation}) {
  
  return (
    <div>
       <article className="container__citation__article">
          <img src={quoteEnd} className="quotes__start" alt="quote"/>
              <p className="citation__text">{subQuotes(citation.citation)}</p>
              <div className="citation__author">
                <p className="citation__author__name">{citation.auteur}</p>
                <img className="citation__author__img"src={citation.image} alt="auhor" />
              </div>
              <img src={quoteStart} className="quotes__end" alt="quote"/>   
        </article>
    </div>
  )
}

export default Citation
