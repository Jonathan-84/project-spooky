import React from 'react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
let today = format(new Date(), "MM-dd-yyyy") 
function Navbar(){

    return (
      <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<h2>
                      <Link to={"/Home"} className=" font-weight-bold navbar-brand nav-text nav-link"> 📅 The Festivities Begin In ...</Link>
                      </h2> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">

               <ul className="nav-item dropdown">
               <Link to={"/halloween"} className= "title-text">Halloween</Link>
               </ul>

                <ul className="nav-item dropdown">
                <Link to={"/mars"} className="title-text">XMas</Link>

      </ul>
      </ul>        
       <ul className="navbar-nav">
      <ul>
                <Link to={"/about"} className="title-text">About</Link>
                </ul>
            
                </ul>
        </div>
        <ul className="navbar-nav">
        <ul>
                <h2 className='fs-4'>Today: {today}</h2>
                </ul>
                </ul>
  
</nav>
          

      </>
    );
  };
  
  export default Navbar;
  