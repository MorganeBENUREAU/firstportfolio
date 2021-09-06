import './style.scss';
import githubLogoBlanc from '../../images/logo-github-blanc.png';
import linkedinLogoBlanc from '../../images/logo-linkedin-blanc.png';
import bitmoji from '../../images/bitmoji.jpeg';

const PresentationDesktop = () => (

  <div className="presentation-desktop">
    <div className="presentation-desktop__bitmoji">
      <img src={bitmoji} alt="moi" />
    </div>

    <div className="presentation-desktop__container">
      <div className="presentation-desktop__p">
        <p>31 ans</p>
        <p>En recherche d'emploi</p>
      </div>
      <div className="presentation-desktop__contact">
        <a href="mailto:morgane.benureau@gmail.com">Envoyez moi un mail</a>
        <a href="tel:+33677432457">Tél : 06 77 43 24 57</a>
      </div>

      <div className="presentation-desktop__logo">
        <a href="https://github.com/MorganeBENUREAU" target="_blank" rel="noreferrer"><img className="logo" src={githubLogoBlanc} alt="logo github" /></a>
        <a href="https://www.linkedin.com/in/morganebenureau/" target="_blank" rel="noreferrer"><img className="logo" src={linkedinLogoBlanc} alt="logo linkedin" /></a>
      </div>
    </div>
  </div>
);


export default PresentationDesktop;
