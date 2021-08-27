import './style.scss';

import LinkDesktop from '../LinkDesktop';
import LinkMobile from '../LinkMobile';


const NavBar = ({ width, breakpoint }) => (

  <div className="navbar">

    <a href="/">
      <h1>Morgane Benureau</h1>
    </a>
  
    { width < breakpoint ? <LinkMobile /> : <LinkDesktop /> }

  </div>
  
);


export default NavBar;
