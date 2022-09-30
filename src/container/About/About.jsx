import React, { useEffect, useRef, useState }  from 'react';


import './About.scss';
import { images, aboutLeft } from '../../constants';
import AnimatedImg from '../../components/animated-img';





function isInViewport(element,mark) {

  const rect = element.current.getBoundingClientRect();
  console.log(rect,"rect",rect.bottom , "window.innerHeight",window.scrollY  ," document.documentElement.clientHeight", document.documentElement.clientHeight)
  if (window.scrollY >= mark){
    return ( //- (window.scrollY / 2  + rect.height)
    
    -((window.scrollY - mark ) * 0.09 )
    //(rect.height - rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight)
      //rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );


  }

 
}




// const [moving, setMoving] = React.useState();

const About = (props) => {
  const {cheangState} = props    
  
  return (
      <section className='about'  >
        <div className='about__title'>
        <h2  ref={(e)=>cheangState(e,true)} className=''>
          <span className="o-row">
            <span>WHERE</span>
          </span>
          <span className="o-row  u-shift">
            <span>SCIENCE</span>
          </span>
          <span className="o-row">
            <span>MEETS</span>
          </span>
          <span className="o-row">
            <span>NATURE</span>
          </span>
        </h2>

        </div>
        <div className='about__imge'>
          <img  className='about-img-center' src={images.about}/>

          {/* <img onLoad={(e)=>cheangState(e)} className='about-img about-img--left'  src={images.aboutLeft}/> */}
          <img ref={(e)=>cheangState(e)}  className='about-img about-img--left'  src={images.aboutLeft}/>

          
          <img ref={(e)=>cheangState(e)}  className='about-img about-img--right' src={images.aboutRight}/>


          
        </div>
        <div className='about__text'>
          <p>
            Each and every formula contains ingredients in the 
            dosages that will do the most for your skin right 
            now. Your formula keeps changing as your skin changes! 
            mco sint eiumod culpa consuat en Mollit nostrud 
            qui magna moollit nisi est officialin eudsece ecat
            adipisicing fugiat.
          </p>
          
        </div>

        
      </section>
    );
};

export default About;
