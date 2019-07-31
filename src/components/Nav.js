import React from 'react';
import { NavLink } from 'react-router-dom';


// Allows the 3 nav buttons to function
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/lizards'>Lizards</NavLink></li>
      </ul>
    </nav>
  );
}


export default Nav; 