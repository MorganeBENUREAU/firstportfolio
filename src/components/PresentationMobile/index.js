import './style.scss';

import githubLogoBlanc from '../../images/logo-github-blanc.png';
import linkedinLogoBlanc from '../../images/logo-linkedin-blanc.png';
import bitmoji from '../../images/bitmoji.jpeg';


const PresentationMobile = () => (
  
  <div className="container-placement">

    <div className="presentation-mobile">
      <div className="presentation-mobile__bitmoji">
        <img src={bitmoji} alt="moi" />
      </div>
      <div className="presentation-mobile__container">
        <div className="presentation-mobile__p">
          <p>31 ans</p>
          <p>En recherche d'emploi</p>
        </div>
        <div className="presentation-mobile__contact">
          <a href="mailto:morgane.benureau@gmail.com">Envoyez moi un mail</a>
          <a href="tel:+33677432457">Tél : 06 77 43 24 57</a>
        </div>
    
        <div className="presentation-mobile__logo">
          <a href="https://github.com/MorganeBENUREAU" target="_blank" rel="noreferrer"><img className="logo" src={githubLogoBlanc} alt="logo github" /></a>
          <a href="https://www.linkedin.com/in/morganebenureau/" target="_blank" rel="noreferrer"><img className="logo" src={linkedinLogoBlanc} alt="logo linkedin" /></a>
        </div>
      </div>
    </div>
    <div className="aProposMobile">
      <p>
        Bonjour,
      </p>
      <p>
        Après environ 10 ans en tant qu'assistante administrative, j'ai voulu changer de d'orientation.
      </p>
      <p>
        J'ai découvert le développement web et j'ai décidé de me former avec l'école O'clock en full distanciel.
        J'ai suivi une formation en développement web fullstack JavaScript d'environ 6 mois dans laquelle j'ai choisis la spécialisation data/api mais j'ai également commencé à m'autoformer en React. Nous avons fait un projet en groupe en situation professionnelle.
      </p>
      <p>
        Je cherche un premier emploi dans le développement afin de continuer à apprendre (Idéalement en télétravail).
      </p>
    </div>
  </div>
);


export default PresentationMobile;
