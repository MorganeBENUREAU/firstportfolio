import './style.scss';
import githubLogoBlanc from '../../images/logo-github-blanc.png';
import linkedinLogoBlanc from '../../images/logo-linkedin-blanc.png';


const PresentationDesktop = () => (
  
  <div className="presentation-desktop">

    <img src="" alt="" />

    <p>31 ans</p>
    <p>Donnez moi un travail svp</p>

    <a href="mailto:morgane.benureau@gmail.com">Envoyez moi un mail</a>
    <a href="tel:+33677432457">Tél : 06 77 43 24 57</a>

    <div className="presentation-desktop__logo">
      <a href="https://github.com/MorganeBENUREAU"><img className="logo" target="_blank" src={githubLogoBlanc} alt="logo github" /></a>
      <a href="https://www.linkedin.com/in/morganebenureau/"><img className="logo" target="_blank" src={linkedinLogoBlanc} alt="logo linkedin" /></a>
    </div>

  </div>
);


export default PresentationDesktop;
