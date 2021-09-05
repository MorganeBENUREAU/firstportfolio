import './style.scss';

// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Burger from '../Burger';
// import CV from '../../../public/CV.pdf';


const LinkMobile = ({burgerOpen, setBurgerOpen}) => {


  
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
          <NavLink onClick={() => setBurgerOpen(false)} exact to="/Formation">Formation</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerOpen(false)} exact to="/Experience">Expérience</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerOpen(false)} exact to="/Projets">Projets</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerOpen(false)} exact to="/Contact">Contact</NavLink> 
        </li>
        <li> 
          <a href="/CV-Dark.pdf" target="_blank" rel="noopener noreferrer">CV</a> 
        </li>
      </ul>
    </div>
  )
};


export default LinkMobile;