import React, { useEffect, useRef }  from 'react';

 import './Info.scss';

import { images } from '../../constants';



const Info = (props) => {
    const {cheangState} = props




  return (
      <section className='c-info'>
        <h2 className="o-h2" >
            Get the right ingredients at the right amounts for your skin.
            <img className='bacround-img' src={images.lineflower}/>
        </h2>

        <div className="c-info__container">
            <div className="c-info__item c-info__item--left col-4">
                <ul>
                    <li>
                        <img src={images.frag} alt="no perfume"/>
                        <p>No Added Fragrance</p>
                    </li>
                    <li>
                        <img src={images.sulp} alt="no Sulphate"/>
                        <p>Sulphate Free</p>
                    </li>
                </ul>
            </div>

            <div className="c-info__item c-info__item--image col-4">
                <div ref={(e)=>cheangState(e)} className="img-detect is-inview" >
                    <img   src={images.info} alt="Tailored just for you"/>
                </div>
            </div>
            <div className="c-info__item c-info__item--right col-4">
                <ul>
                    <li>
                    <img src={images.glut} alt="no gluten"/>
                    <p>Gluten-free</p>
                    </li>
                    <li>
                    <img src={images.crue} alt="no harshness"/>
                    <p>Cruelty-free</p>
                    </li>
                </ul>
            </div>
      </div>

      </section>
    );
};

export default Info;
