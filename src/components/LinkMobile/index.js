import './style.scss';

// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const LinkMobile = ({ burgerIsOpen, setBurgerIsOpen }) => {

  return(
    
    <div className="linkMobile">
        
        <ul className="menuNav showMenu" >
        <li> 
          <NavLink onClick={() => setBurgerIsOpen(!burgerIsOpen)} exact to="/Formation">Formation</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerIsOpen(!burgerIsOpen)} exact to="/Experience">Expérience</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerIsOpen(!burgerIsOpen)} exact to="/Projets">Projets</NavLink> 
        </li>
        <li> 
          <NavLink onClick={() => setBurgerIsOpen(!burgerIsOpen)} exact to="/Contact">Contact</NavLink> 
        </li>
        <li> 
          <a onClick={() => setBurgerIsOpen(!burgerIsOpen)} href="/CV-Dark.pdf" target="_blank" rel="noopener noreferrer">CV</a> 
        </li>
      </ul>
      
    </div>
  )
};


export default LinkMobile;