import React from 'react';
import './Header.css';

function Header () {
  return (
    <section className="header border">
      <section className="header-top">
        <section className="header-top__logo">      
        <img src="./mylogo.svg" alt="ai" style={{
        width: '100%',
        height: '65%',
        }}/>
          <a href="/" className="header-logo" style={{
            fontSize: '1rem',
            color: 'white'
         }}>Info Nav</a>
        </section>
        <section className="header-top__navbar">
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">     
        </section>
        <section className="header-bottom__email">
        </section>
      </section>
    </section>
  )
}

export default Header;