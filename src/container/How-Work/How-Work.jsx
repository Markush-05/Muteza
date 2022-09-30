import React, { useEffect, useRef }  from 'react';

import './How-Work.scss';

import { images } from '../../constants';



const HowWork = (props) => {
    const {cheangState} = props


  return (
      <section className='how-work'>
        <div ref={(e)=>cheangState(e)} className='inview how-work__sm'>
            <h2 ref={(e)=>cheangState(e,true)} className="inview__title">
                <span className="o-row">
                    <span>HOW THIS</span>
                </span>
                <span className="o-row">
                    <span>WORKS</span>
                </span>
            </h2>

            <p>
                We take care of everything, you just have to
                test your skin and apply serum.
            </p>

            <div className="inview__img" >
                <img src={images.howWork}/>
            </div>

        </div>
        <div className='how-steps how-work__bg'>
            <ul>
                <li>
                    <h3>
                    <span>01</span><br/>
                        Test your skin
                    </h3>
                    <p>
                        Use our at-home skin test to formulate your custom 
                        serum. Nothing to mail back! 
                    </p>
                </li>
                <li>
                    <h3>
                    <span>02</span><br/>
                        Preview Your Formula
                    </h3>
                    <p>
                        After completing your Skin Health Kit, you’ll see your
                        Skin Report and preview the ingredients in your formula. 
                    </p>
                </li>
                <li>
                    <h3>
                    <span>03</span><br/>
                        Apply Serum
                    </h3>
                    <p>
                        Receive your custom serum in a few days. It’s 
                        designed to work with your existing routine.
                    </p>
                </li>
                <li>
                    <h3>
                    <span>04</span><br/>
                        Adapt and Perfect
                    </h3>
                    <p>
                        Each month, we’ll adapt your formula so it continues 
                        to change as your skin changes.
                    </p>
                </li>
            </ul>
        </div>

      </section>
    );
};

export default HowWork;
