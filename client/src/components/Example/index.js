import React, {useContext} from 'react';
import useStore from 'hooks/useStore'
import Store from 'store/index'
import './example.scss';
import image from 'assets/loupe.png';
import quoteStart from 'assets/ouvrantes_shadow_white.svg';
import quoteEnd from 'assets/fermantes_shadow_white.svg';


function Example() {
const {citations, setCitations} = useContext(Store);


const setValue = () => {
  const citation = ["blabla","blabla2"];
 setCitations(citation);
}
  return (
  
      <div className="container__citation">
        <h1 className="container__citation__h1">Citation du jour</h1>
        <article className="container__citation__article">
          <img src={quoteStart} className="quotes__start" />
          <p className="citation__text">En te levant le matin, rappelle-toi combien précieux est le privilège de vivre, de respirer, d'être heureux</p>
          <div className="citation__author">
            <p className="citation__author__name">Marc Aurèle</p>
            <img className="citation__author__img"src={image} alt="auhor" />
          </div>
          <img src={quoteEnd} className="quotes__end" />
        </article>
        <button onClick={setValue}>click!</button>
        <h2>{citations[0]}</h2>
      </div>
      
       
   
  )
}

export default Example
