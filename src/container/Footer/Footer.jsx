import React, { useEffect, useRef, useState }  from 'react';

import './Footer.scss';

import { images } from '../../constants';
import BgOrangeBtn from '../../components/bg-orange-btn/bg-orange-btn';
import Logo from '../../components/logo';




// const [moving, setMoving] = React.useState();

const Footer = (props) => {
  const {cheangState} = props    
  
  return (
     <footer className='footer'>
      <div className='footer__imges'>
        <img src={images.footer}/>

      </div>

      <div className='footer__container'>

        <div className="footer__col">
          <h2 data-scroll="" className="o-h2 detect is-inview">
            <span className="o-row">
              <span>Ready to</span>
            </span>
            <span className="o-row">
              <span>Transform</span>
            </span>
            <span className="o-row">
              <span>Your Skin?</span>
            </span>
          </h2>
          <BgOrangeBtn>SEE PRODUCT<span>⟶</span></BgOrangeBtn>
          <a href="product.html"></a>
        </div>
        
        <div className="footer__col">
          <Logo/>
          <div className='footer-list__container'>
            <ul className="footer-list">
              <li className='footer-list__item'><a className='footer-list__links' href="#">Product</a></li>
              <li className='footer-list__item'><a className='footer-list__links' href="#">How it works</a></li>
              <li className='footer-list__item'><a className='footer-list__links' target="_blank" href="#">Faq</a></li>
              <li className='footer-list__item'><a className='footer-list__links' href="#">Reviews</a></li>
              <li className='footer-list__item'><a className='footer-list__links' target="_blank" href="#">Blog</a></li>
            </ul>
            <ul className="footer-list">
              <li className='footer-list__item'><a className='footer-list__links' target="_blank" href="#">Instagram</a></li>
              <li className='footer-list__item'><a className='footer-list__links' target="_blank" href="#">Twitter</a></li>
              <li className='footer-list__item'><a className='footer-list__links' target="_blank" href="#">Dribbble</a></li>
            </ul>
          </div>

          <div className="footer-copy">
            <p className="col-8">
              © 2020 Muteza<br/>
              Website Made By <a target="_blank" href="https://abhishekjha.me/?ref=muteza-footer">Abhishek Jha</a>
            </p>
            <div>
              <a href="#">Privacy Policy</a><br/>
              <a href="#" className="u-copy">Terms</a>
            </div>
          </div>
        </div>

      </div>

     </footer>

    );
};

export default Footer;
