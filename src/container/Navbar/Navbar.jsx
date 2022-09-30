import React from 'react';
import BgOrangeBtn from '../../components/bg-orange-btn/bg-orange-btn';
import Logo from '../../components/logo/index'
import './Navbar.scss';



const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
      <nav className='nav'>

        <div className='nav__logo'><Logo/> </div>

        
          <ul className='nav-list nav__list'>
            <li className='nav-list__item'><a className='nav-list__link' href="#">Product</a></li>
            <li className='nav-list__item'><a className='nav-list__link' href="#">How it Works</a></li>
            <li className='nav-list__item'><a className='nav-list__link' href="#">Reviews</a></li>
            
          </ul>

      

        <div className='nav__buttons'>
          <a className='nav-list__link' href="#">Sign up/in</a>
          <BgOrangeBtn inText={'Get Started'}></BgOrangeBtn>
        </div>
        
      </nav>
    );
};

export default Navbar;
