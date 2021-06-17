import React, {useContext} from 'react'
import CitationsContext from 'store/citations'
import Search from 'components/Search'
import Citation from 'components/Citation'

function Explore() {
const {citations} = useContext(CitationsContext);
  return (
    <div>
      <Search />
      <h1>EXPLOre Theme à voir props</h1>
      {citations && citations.map(item => (<Citation citation={item} key={item.auteur}/>))}
    </div>
  )
}

export default Explore
