import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import Store from 'store'
import {URL} from 'utils/constantes'
import './header.scss';

function Header() {
  const { profile } = useContext(Store)
  console.log("profule via header", profile)
  const {isConnected, avatar, firstName} = profile
  return (
    <header>
      <h2 className="header__h2 logo"><Link className="header__link" to="/">Citateur</Link></h2>
      {isConnected
      ? ( <>
          <h2 className="header__h2"><Link className="header__link" to="/Dashboard"> Vos Citations </Link></h2>
          <h2 className="header__h2"> Logged !</h2>
          </>)
      : (<>
          <h2 className="header__h2"><Link className="header__link" to="/Dashboard"> Vos Citations </Link></h2>
          <h2 className="header__h2 sign" ><a className="header__link" href={`${URL}auth/google`}> Sign in With Google </a></h2>
        </>)
    }
      
    </header>
  )
}

export default Header
