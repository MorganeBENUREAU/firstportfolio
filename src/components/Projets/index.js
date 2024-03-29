import './style.scss';

import nodeJS from '../../images/logo-nodeJS.png';
import postgreSQL from '../../images/logo-postgresql.png';
import react from '../../images/logo-react.png';
import koa from '../../images/logo-koa.png';
import typescript from '../../images/logo-typescript.png';

const Projets = () => (
  
  <div className="projets">

    <h2>Projets</h2>
    <div className="container">
      <section>
          <h3> NotaBebe </h3>
          <div className="container-techno">
            <img src={nodeJS} alt="nodeJS" className="container-techno__img"/>
            <img src={postgreSQL} alt="postgresQL" className="container-techno__img"/>
            <img src={react} alt="react" className="container-techno__img"/>
          </div>
        
          <div className="container__more-informations">
            <p className="container__more-informations">
              Projet réalisé en groupe de 5 (3 personnes côté front, 2 côté back, dont moi-même). Ce projet a été fait dans le cadre de ma formation O'clock comme projet de fin d'études. C'est un site qui permet de faire le lien entre des parents et une structure d'accueil comme une crèche.
            </p>
            <a target="_blank" rel="noreferrer" href="https://notabebe.netlify.app/">Lien du projet.</a>
          </div>
        </section>

      
        <section>
          <h3> Bibli'O </h3>
          <div className="container-techno">
            <img src={nodeJS} alt="nodeJS" className="container-techno__img"/>
            <img src={postgreSQL} alt="postgresQL" className="container-techno__img"/>
          </div>
        
          <div className="container__more-informations">
            <p className="container__more-informations">
              Api de bibliothèque personnelle faite en NodeJS et PostgreSQL. Début de front en EJS, mon but est de faire le front en React. (en cours)
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/MorganeBENUREAU/bibliO">Lien vers le github du projet.</a>
          </div>
        </section>

        <section>
          <h3> Générateur titre de film disney </h3>
          <div className="container-techno">
            <img src={nodeJS} alt="nodeJS" className="container-techno__img"/>
            <img src={koa} alt="postgresQL" className="container-techno__img"/>
            <img src={typescript} alt="postgresQL" className="container-techno__img"/>
          </div>
        
          <div className="container__more-informations">
            <p className="container__more-informations">
              Apprentissage de Koa et typescript
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/MorganeBENUREAU/">Lien vers le github du projet.</a>
          </div>
        </section>

        <section>
          <h3> Création site vitrine pour particulier </h3>
          <div className="container-techno">
            <img src={react} alt="react" className="container-techno__img"/>
          </div>
        
          <div className="container__more-informations">
            <p className="container__more-informations">
              Apprentissage de leaflet pour ajouter une carte et firebase pour héberger le site.
            </p>
            <a target="_blank" rel="noreferrer" href="https://martineangibaud.fr/">Lien du site.</a>
          </div>
        </section>
        
        <section>
          <h3> Projet à venir </h3>
          {/* <img src={img} alt="projets" className="projets__img"/> */}
          {/* <p className="container__more-informations">
            presentation succinte
          </p> */}
        </section>
        {/* <section>
          <h3> Projet à venir </h3>
          <img src={img} alt="projets" className="projets__img"/>
          <p className="container__more-informations">
            presentation succinte
          </p>
        </section> */}
        {/* <section>
          <h3> Projet à venir </h3>
          <img src={img} alt="projets" className="projets__img"/>
          <p className="container__more-informations">
            presentation succinte
          </p>
        </section> */}
    </div>

  </div>
);


export default Projets;
