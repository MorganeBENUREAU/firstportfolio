import './style.scss';

import nodeJS from '../../images/logo-nodeJS.png';
import postgreSQL from '../../images/logo-postgresql.png';
import react from '../../images/logo-react.png';


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
        
          <p className="container__more-informations">
            Projet réalisé en groupe de 5 (3 personnes côté front, 2 côté back, dont moi-même). Ce projet a été fait dans le cadre de ma formation O'clock comme projet de fin d'études. C'est un site qui permet de faire le lien entre des parents et une structure d'accueil comme une crèche.
          </p>
          <a href="https://notabebe.netlify.app/">Lien du projet</a>
        </section>

      
        <section>
          <h3> Bibli'O </h3>
          <div className="container-techno">
            <img src={nodeJS} alt="nodeJS" className="container-techno__img"/>
            <img src={postgreSQL} alt="postgresQL" className="container-techno__img"/>
          </div>
        
          <p className="container__more-informations">
            Api de bibliothèque personnelle faite en NodeJS et PostgreSQL. Début de front en EJS, mon but est de faire le front en React. (en cours)
          </p>
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
