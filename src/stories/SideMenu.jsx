import React from 'react';
import { useState } from 'react';

import { Button } from './Button';


export default function SideMenu({ minimised, buttons, onToggle }) {


  const [min, setMin] = useState(minimised)

  /* if (minimised) {
     return  (
     <div className="side-menu">{min?"T":"F"}
       <div className="menu-toggle-container menu-toggle-container--minimised ">
     <button className="menu-toggle menu-toggle--closed" onClick={()=>{setMin(!min);alert(min)}} key={'toggle'}></button>
 </div>
     </div> );
   }
 
   /*if (buttons.length === 0) {
     return <div className="side-menu">empty</div>;
   }*/

  return (
    <div className={`side-menu side-menu--${min ? 'closed' : 'open'}`}>

      <div className="menu-toggle-container">
        <button
          onClick={() => setMin(!min)}
          className={`menu-toggle menu-toggle--${min ? 'closed' : 'open'}`} key={'toggle'}></button>
      </div>
      <div className={`menu-button-container menu-button-container--${min ? 'closed' : 'open'}`}>
      <div className={`menu-button-container-inner menu-button-container-inner--${min ? 'closed' : 'open'}`}>
        {buttons.map((button, index) => (
          <>
            <Button key={index} {...button} min={min} />
          </>
        ))}
      </div>
      </div>

    </div>
  );
}

