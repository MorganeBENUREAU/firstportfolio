
import './style.scss';

import PresentationDesktop from '../PresentationDesktop';
import PresentationMobile from '../PresentationMobile';

const Accueil = ({width, breakpoint}) => (
  
  <div className="accueil">
    { width < breakpoint ? <PresentationMobile /> : <PresentationDesktop /> }
  </div>
);


export default Accueil;
