import React, { useEffect, useRef, useState }  from 'react';

import './Benefit.scss';

import { images } from '../../constants';




// const [moving, setMoving] = React.useState();

const Benefit = (props) => {
  const {cheangState} = props    
  
  return (
      <section className='c-benefit'>
        <div  className='c-benefit__image'>
        <div ref={(e)=>cheangState(e)} className="c-benefit__image--inview">
            <img src={images.ing}/>
        </div>
          
        </div>

        <div className="c-benefit__cards">
            
        <ul className="benefit-list">
          <li  ref={(e)=>cheangState(e,false,6)} className="benefit-list__item">
            <div className="tile tile--colord1">
              <h3>ADAPTS TO<br/>YOUR NEEDS</h3>
              <p>
                As you do your skin test with our Skin 
                Health Kit each month, your formulation 
                will continue to adapt to the changing 
                needs of your skin. 
              </p>
              <img src={images.clock} alt="clock"/>
            </div>
          </li>
          <li ref={(e)=>cheangState(e,false,4)} className="benefit-list__item">
            <div className="tile tile--colord2">
              <h3>BEST<br/>INGREDIENTS</h3>
              <p>
                Developed with natural ingredients, the only 
                scents you'll find in our products come from 
                nature.
              </p>
              <img src={images.leaf} alt="leaf"/>
            </div>
          </li>
          <li ref={(e)=>cheangState(e,false,3)} className="benefit-list__item">
            <div className="tile tile--color3">
              <h3>YOUR PERFECT<br/>DOSE</h3>
              <p>
                Each formula contains ingredients in the dosages 
                that will do the most for your skin at that time.
              </p>
              <img src={images.dropper} alt="dropper"/>
            </div>
          </li>
        </ul>
      </div>
      
        
      </section>
    );
};

export default Benefit;
