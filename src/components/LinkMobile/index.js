import './style.scss';

import { useState } from 'react';

import Burger from '../Burger';


const LinkMobile = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);
  
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  };

  return(
    
    <div className="linkMobile">

      <button className="burger" onClick={toggleBurger} >
        <Burger />
      </button>

      <ul className= {`menuNav${burgerOpen ? " showMenu" : ""}`} >
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


export default LinkMobile;