import React from 'react';
import './header.scss';

function Header() {
  return (
    <header>
      <h1 className="header__h1">Citateur</h1>
      <h2 className="header__h2"><a className="header__link" href="/auth/google"> Sign in With Google </a></h2>
    </header>
  )
}

export default Header
