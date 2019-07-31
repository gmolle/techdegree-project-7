import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/pizza'>Pizza</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/lizards'>Lizards</NavLink></li>
      </ul>
    </nav>
  );
}


export default Nav; 