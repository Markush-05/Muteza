import React, { useEffect, useRef, useState }  from 'react';


const AnimatedImg = ({imgSrc} ) => {
  console.log("AnimatedImg",imgSrc)
  const [show, setShow] = React.useState(false);
  const image = null

  const [loading, setLoading] = useState(false)


  const img =  <img onLoad={()=> console.log("{{{{{")} src={imgSrc}></img>

  console.log(img)
  const im = img ? img : <h1>Download</h1>
  
  return im

};

export default AnimatedImg;
