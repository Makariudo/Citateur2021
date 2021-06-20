import React, {useContext, useRef} from 'react'
import {useParams} from 'react-router-dom';
import CitationsContext from 'store/citations'
import Citation from 'components/Citation'
import './explore.scss'

function Explore() {
const {citations} = useContext(CitationsContext);
const scrollingElem = useRef();
const {mot} = useParams();


const handleWheel= (e) => {
  let spaceMove = 100;
  spaceMove = (e.deltaY <0) ? -spaceMove : spaceMove;
  scrollingElem.current.scrollBy(spaceMove,0)
}

  return (
    <div className="explore__container">
      <h1 className="explore__h1">Citations avec le mot {mot}</h1>
      <div className="explore__bloc__citations" onWheel={handleWheel} ref={scrollingElem}>
        {citations && citations.map(item => (<Citation citation={item} key={item.auteur}/> || citations.error))}
      </div>
    </div>
  )
}

export default Explore
