import React, {useContext, useRef} from 'react'
import CitationsContext from 'store/citations'
import Search from 'components/Search'
import Citation from 'components/Citation'
import './explore.scss'

function Explore() {
const {citations} = useContext(CitationsContext);
const scrollingElem = useRef();

const handleWheel= (e) => {
  let spaceMove = 100;
  spaceMove = (e.deltaY <0) ? -spaceMove : spaceMove;
  scrollingElem.current.scrollBy(spaceMove,0)
}

  return (
    <div className="explore__container">
      <Search />
      <h1 className="explore__h1">EXPLOre Theme à voir props</h1>
      <div className="explore__bloc__citations" onWheel={handleWheel} ref={scrollingElem}>
        {citations && citations.map(item => (<Citation citation={item} key={item.auteur}/> || citations.error))}
      </div>
    </div>
  )
}

export default Explore
