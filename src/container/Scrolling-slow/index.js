import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "./useWindowSize";
// import "./scrolling-slow.scss";
 import './scrolling-slow.scss'

 let listElements = []


 
function ScrollingSlow(props){
    //Hook to grab window size
  const size = useWindowSize();

  listElements = []

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();
  const scrollbar = useRef();
  
  

  // Configs
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0.0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    // console.log('body',scrollContainer.current.getBoundingClientRect())
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;

    

    if (listElements.length > 0) {
      listElements.map( (e, idx)=> {
        // console.log("mkmkmkmk", e.ref.getBoundingClientRect() - (size.height/1.25))
        listElements[idx].fokus = ( e.ref.getBoundingClientRect().top - (size.height/1.25))    
        
        })
    }

  };

  // Scrolling

  const skewScrolling = () => {

    data.current = window.scrollY;  
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = + acceleration;
    const skew = velocity * 0;

    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    // scrollbar.current.style.transform = `translate3d(0, + ${data.rounded/8}px, 0) `;

    //console.log(data.rounded)
     animationElement()

    requestAnimationFrame(() => skewScrolling());
  }

  // animation element
  const animationElement = ()=> {
    
      // 
      listElements.map( (e, idx)=> {
          
          if( e.fokus <= data.rounded && (e.fokus + size.height) >= data.rounded){
            if (e.detect){
              e.ref.classList.add('detect') 
              // console.log(idx)
            }else{
              // console.log(e.fokus,data.rounded, e.height)
              // console.log(data.rounded)
              e.ref.style.transform = `translate3d(0, -${(data.rounded - e.fokus)/e.division}px, 0) `;
            }
            
          }
          
        
        })
    

  }


  const cheangState = (element,detect = false, division = 6) =>{
    //console.log(size,"$$$cheangState",element.getBoundingClientRect(),"all",)
    
    if (element){
      // console.log("mkmkmkmk", element.getBoundingClientRect())
      listElements = [ ... listElements,{ref:element,detect,division,fokus: element.getBoundingClientRect().top - (size.height/1.25)}]
      
    }
  
  }

  const  scrollbarElment = <span  className="scrolling__scrollbar"><span ref={scrollbar} className="scrolling__scrollbar--thumb" ></span></span>

  return (
    <div ref={app} className="scrolling">
        {props.navBar}
        
        <div ref={scrollContainer} className="scrolling__scroll">
          {React.Children.map(props.children, (Child, idx)=>{
            console.log("ren")
            
            return React.cloneElement( Child,{cheangState} )
          })}
        
        </div>
      {/* {scrollbarElment} */}
    </div>
  );
}

export default ScrollingSlow 