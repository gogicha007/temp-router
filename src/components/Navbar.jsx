import React from 'react';
import logo from '../assets/coffee.png'

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="" width={85}/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get started</button>
    </div>
  );
};

export default Navbar;
