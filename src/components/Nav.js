import React from 'react';
import logo from '../assets/ear1-logo.svg';

const Nav=({handleToggle,toggle})=>{
    
    
    return(
        <>
        <nav id="topnav">
        <header id="brand-logo">
           <img src={logo} alt="ear1 Logo" />
        </header>

        <ul id="nav" className={toggle?"toggle":""}>
          <li><a href="/" onClick={handleToggle}> Home </a></li>
          <li><a href="#fans" onClick={handleToggle}> For fans </a></li>
          <li><a href="#influencer" onClick={handleToggle}> For Influencer </a></li>
          <li><a href="#features" onClick={handleToggle}> Features </a></li>
          <li><a href="/" onClick={handleToggle}> FAQ's </a></li>

          <div id="toggle-btn" onClick={handleToggle} 
              className={toggle?"close":"open"}>
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </div>
        </ul>
      </nav>
      
        </>
    )
}

export default Nav