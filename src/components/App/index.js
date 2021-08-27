import './style.scss';

import { useState, useEffect } from 'react';

import NavBar from '../NavBar';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import Contact from '../Contact';
import Projets from '../Projets';


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
  
  return (
  
    <div className="app">
      <NavBar width={width} breakpoint={breakpoint} />
      
      <Switch>
        
        <Route path='/' exact>
          <Accueil />
        </Route>

        <Route path='/A-propos' exact>
          <Apropos />
        </Route>

        <Route path='/Contact' exact>
          <Contact />
        </Route>

        <Route path='/Projets' exact>
          <Projets />
        </Route>

      </Switch>
    </div>
  )
};


export default App;
