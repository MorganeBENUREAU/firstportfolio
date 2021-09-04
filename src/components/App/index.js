import './style.scss';

import { useState, useEffect } from 'react';

import NavBar from '../NavBar';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import Contact from '../Contact';
import Projets from '../Projets';
import Experience from '../Experience';
import Formation from '../Formation';
import LinkMobile from '../LinkMobile'


import { Switch, Route } from 'react-router-dom';


const App = () => {

  // find window width to add a breakpoint
  const [width, setWidth] = useState(window.innerWidth);
  // defined a breakpoint
  const breakpoint = 750;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []); 
  
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
  
    <div className="app">

      <NavBar width={width} breakpoint={breakpoint} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      
      <div className="container">

      <Accueil width={width} breakpoint={breakpoint} />

        <Switch>
4
          <Route path='/' exact >
            {burgerOpen ? <LinkMobile/> : <Apropos />}
          </Route>

          <Route path='/Experience' exact>
            {burgerOpen ? <LinkMobile/> : <Experience />}
            
          </Route>

          <Route path='/Formation' exact>
            {burgerOpen ? <LinkMobile/> : <Formation />}
            
          </Route>

          <Route path='/Projets' exact>
            {burgerOpen ? <LinkMobile/> : <Projets />}
          </Route>
          <Route path='/Contact' exact>
            {burgerOpen ? <LinkMobile/> : <Contact />}
          </Route>
        </Switch>
      </div>
    </div>
  )
};


export default App;
