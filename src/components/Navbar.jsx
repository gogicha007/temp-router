import React from 'react';
import logo from '../assets/coffee.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <img src={logo} alt="" width={85} />
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/products'>
          <li>Products</li>
        </NavLink>
        <NavLink to='/about'>
          <li>About</li>
        </NavLink>
        <NavLink to='/contact'>
          <li>Contact</li>
        </NavLink>
        <NavLink to='/jobs'>
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={()=> navigate('/', {replace: true})}>Get started</button>
    </div>
  );
};

export default Navbar;
