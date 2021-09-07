import './style.scss';

import { NavLink } from 'react-router-dom';

const NavbarLink = () => (
  
  <ul className="navbarLink" >
    <li> 
      <NavLink exact to="/Formation">Formation</NavLink> 
    </li>
    <li> 
      <NavLink exact to="/Experience">Expérience</NavLink> 
    </li>
    <li> 
      <NavLink exact to="/Projets">Projets</NavLink> 
      </li>
    <li> 
      <NavLink exact to="/Contact">Contact</NavLink> 
    </li>
  </ul>
  
);


export default NavbarLink;
