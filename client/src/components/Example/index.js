import React, {useContext} from 'react';
import useStore from 'hooks/useStore'
import Store from 'store/index'
import './example.scss';
import image from 'assets/loupe.png';
import quoteStart from 'assets/ouvrantes_shadow_white.svg';
import quoteEnd from 'assets/fermantes_shadow_white.svg';


function Example() {
const {citation, isLoading} = useContext(Store);
console.log(citation, isLoading)

  return (

      <div className="container__citation">
        <h1 className="container__citation__h1">Citation du jour</h1>
        <article className="container__citation__article">
          <img src={quoteStart} className="quotes__start" />
          {isLoading 
          ? <p className="citation__text">Fetching data...</p>
          : (<>
              <p className="citation__text">{citation.citation}</p>
              <div className="citation__author">
                <p className="citation__author__name">{citation.author}</p>
                <img className="citation__author__img"src={citation.authorImg} alt="auhor" />
              </div>
              <img src={quoteEnd} className="quotes__end" />
            </>)
            
          }
          
        </article>
      </div>
      
       
   
  )
}

export default Example
