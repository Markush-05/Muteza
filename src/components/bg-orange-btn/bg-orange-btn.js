import React from 'react';

import './bg-orange-btn.scss';

const BgOrangeBtn = ({inText, children}) => {
    return (
    <button className='bg-orange-btn'>{inText}{children}</button>
    )
}
  
export default BgOrangeBtn;
  