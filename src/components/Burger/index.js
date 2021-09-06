import './style.scss';


const Burger = ({ burgerIsOpen, setBurgerIsOpen }) => (
  

  <div className="burger-menu" onClick={ () => setBurgerIsOpen(!burgerIsOpen)}>
    <div className="burger"></div>
    <div className= "burger"></div>
    <div className= "burger"></div>
  </div>
  
);


export default Burger;