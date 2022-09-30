import React, { useEffect, useRef }  from 'react';

 import './Reviews.scss';

import { images } from '../../constants';



const Reviews = (props) => {
    const {cheangState} = props




  return (
    <section className="reviews" >
    <div className="reviews__col reviews__col--left ">
      <h2 className="o-h2">REVIEWS</h2><br/>
       <ul className='reviews-list'>
         <li className='reviews-list__item'>
           <img src={images.fivestar} alt="5-Star"/>
           <p>
            Best first experience with a skincare product! Within 3 days, 
            I saw changes to my skin - improving texture, moisture, and 
            softening of fine lines.
            <span>— Michelle</span>
           </p>
         </li>
         <li className='reviews-list__item'>
          <img src={images.fivestar} alt="5-Star"/>
          <p>
            It absorbs quickly and leaves my face feeling clean. It 
            seemed to help clear up a few small breakout spots 
            pretty quickly after I started using it.
           <span>— Jen</span>
          </p>
        </li>
        <li className='reviews-list__item'>
          <img src={images.fivestar} alt="5-Star"/>
          <p>
            This has already changed my skin in a month! And the ever 
            changing serum taking into account changes to my skincare 
            regimen and seasonal changes is amazing!
           <span>— Delilah</span>
          </p>
        </li>
       </ul>
    </div>
    <div className="c-review__col reviews__col--right ">
      <div className="c-beforeafter c-beforeafter--left ">
            <div className='c-beforeafter__img-over'>
                <img src={images.review1} alt="Make your face pretty"/>
          </div>
          <p className='c-beforeafter__text'>
            I don’t wear makeup very often, but when I do I go for a 
            natural, no-makeup look. This skin tint and concealer gives 
            exactly that. It helps even out my skin tone and looks very 
            natural.
            <span>— Min</span>
           </p>
        
      </div>
      <div className="c-beforeafter c-beforeafter--right ">
            <div className='c-beforeafter__img-over'>
                <img src={images.review2} alt="Make your face pretty"/>
            </div>
          
          <p className='c-beforeafter__text'>
            I don’t wear makeup very often, but when I do I go for a 
            natural, no-makeup look. This skin tint and concealer gives 
            exactly that.
            <span>— Casey</span>
           </p>
        </div>
      
    </div>
  </section>
    );
};

export default Reviews;
