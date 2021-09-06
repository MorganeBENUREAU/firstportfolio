import './style.scss';

import LinkDesktop from '../LinkDesktop';
import Burger from '../Burger';

const NavBar = ({ width, breakpoint, burgerIsOpen, setBurgerIsOpen }) => (

  <div className="navbar">

    <a href="/">
      <h1>Morgane Benureau</h1>
    </a>

    { width < breakpoint ? ( 
      <>
      <Burger burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} />
      </>
    ) : <LinkDesktop /> }

  </div>
  
);


export default NavBar;
 