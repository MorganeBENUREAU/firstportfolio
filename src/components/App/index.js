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
  
 const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  return (
  
    <div className="app">

      <NavBar width={width} breakpoint={breakpoint} burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} />
      
      <div className="container">

      

        <Switch>

          <Route path='/' exact >
            {burgerIsOpen ? <LinkMobile burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} /> : (
              <>
              <Accueil width={width} breakpoint={breakpoint} />
              <Apropos />
              </>
            )}
          </Route>

          <Route path='/Experience' exact>
            {burgerIsOpen ? <LinkMobile burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} /> : (
              <>
              <Accueil width={width} breakpoint={breakpoint} />
              <Experience />
              </>
            )}
            
          </Route>

          <Route path='/Formation' exact>
            {burgerIsOpen ? <LinkMobile burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} /> : (
              <>
              <Accueil width={width} breakpoint={breakpoint} />
              <Formation />
              </>
            )}
          </Route>

          <Route path='/Projets' exact>
            {burgerIsOpen ? <LinkMobile burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} /> : (
              <>
              <Accueil width={width} breakpoint={breakpoint} />
              <Projets />
              </>
            )}
          </Route>
          <Route path='/Contact' exact>
            {burgerIsOpen ? <LinkMobile burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} /> : (
              <>
              <Accueil width={width} breakpoint={breakpoint} />
              <Contact />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  )
};


export default App;
