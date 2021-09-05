import './style.scss';

import img from '../../images/img-projets.jpg';

const Projets = () => (
  
  <div className="projets">

    <h2>Projets</h2>

    <div className="container">
      <section>
        <h3> Bibli'O </h3>
        <img src={img} alt="projets" className="projets__img"/>
        <p className="container__more-informations">
          Api de bibliothèque personnelle faite en NodeJS et PostgresQL. Début de front en EJS, mon but est faire le front en React. (en cours)
        </p>
      </section>
      
      <section>
        <h3> Titre du projet </h3>
        <img src={img} alt="projets" className="projets__img"/>
        <p className="container__more-informations">
          presentation succinte
        </p>
      </section>
      <section>
        <h3> Titre du projet </h3>
        <img src={img} alt="projets" className="projets__img"/>
        <p className="container__more-informations">
          presentation succinte
        </p>
      </section>
      <section>
        <h3> Titre du projet </h3>
        <img src={img} alt="projets" className="projets__img"/>
        <p className="container__more-informations">
          presentation succinte
        </p>
      </section>
    </div>

  </div>
);


export default Projets;
