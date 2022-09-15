import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
     if (window.scrolly > 100) {
       handleShow(true);
     }else {
       handleShow(false);
     }
 };

 useEffect (() => {
   window.addEventListener("scroll", transitionNavBar);
   return () => window.removeEventListener("scroll", transitionNavBar);
 }, []);

  return (
    <div className="nav nav__black">
     <div className="nav__contents">
       <img 
         className="nav__logo"
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
         alt=""
        />
       <img 
         className="nav__avatar"
         src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" 
         alt=""
        />
     </div>
    </div>
  );
}

export default Nav;