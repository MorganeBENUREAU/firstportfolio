import './style.scss';

import { useState } from 'react';

import Burger from '../Burger';


const NavBar = ({ width, breakpoint }) => {

  const [burgerOpen, setBurgerOpen] = useState(false);
  
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  };

  return(
  
    <div className="navbar">
      <a href="/">
        <h1>Morgane Benureau</h1>
      </a>
    
      {/* width < breakpoint ? <HeaderMobile /> : <HeaderDesktop /> */}

      <button className="burger" onClick={toggleBurger} >
        <Burger />
      </button>

      <ul className= {`menuNav ${burgerOpen ? " showMenu" : ""}`} >
        <li> 
          <a href="/A-propos">A Propos</a> 
        </li>
        <li> 
          <a href="/Contact">Projets</a> 
          </li>
        <li> 
          <a href="/Projets">Contact</a> 
        </li>
      </ul>

    </div>
  )
};


export default NavBar;
