import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';

function Header() {
  return (
    <header>
      <h2 className="header__h2 logo"><Link className="header__link" to="/">Citateur</Link></h2>
      <h2 className="header__h2"><Link className="header__link" to="/Dashboard"> Vos Citations </Link></h2>
      <h2 className="header__h2 sign" ><a className="header__link" href="/auth/google"> Sign in With Google </a></h2>
    </header>
  )
}

export default Header
