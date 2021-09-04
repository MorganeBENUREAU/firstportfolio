import './style.scss';

import { NavLink, Link } from 'react-router-dom';

const LinkDesktop = () => (

  <div className="linkDesktop">

    <ul className = "linkDesktop-list" >
      <li> 
        <NavLink to="/Formation">Formation</NavLink> 
      </li>
      <li> 
        <NavLink to="/Experience">Expérience</NavLink> 
      </li>
      <li> 
        <NavLink to="/Projets">Projets</NavLink> 
      </li>
      <li> 
        <NavLink to="/Contact">Contact</NavLink> 
      </li>
      <li> 
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      </li>
    </ul>
  </div>
   
);


export default LinkDesktop;