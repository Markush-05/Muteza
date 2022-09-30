import React from 'react';

import './Welcome.scss';
import { images } from '../../constants';



const Welcome = (props) => {
  console.log(props)
  const {cheangState} = props;
  return (
      <section className='welcome'>
        <div className='welcome__text '>

          <h1 ref={(e)=>cheangState(e,true)} className='wonder-title '>
            <span className="o-row u-shift">
              <span>*YOUR</span>
            </span>
            <span className="o-row">
              <span>PERSONALISED</span>
            </span>
            <span className="o-row u-shift u-bnr--padd">
              <span>SERUM TO</span>
            </span>
            <span className="o-row">
              <span>PERFECT SKIN</span>
            </span>
          </h1>


        </div>
        <div className='welcome__imge'>
            <img ref={e=>cheangState(e)} src={images.welcome} alt="" />
        </div>

     
        
      </section>
    );
};

export default Welcome;

