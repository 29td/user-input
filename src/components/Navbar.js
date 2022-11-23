import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="title">
      <h3>Technical&apos; Assessement</h3>
    </div>
    <ul className="nav-links">
      <li><NavLink to="./" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>OMDB</NavLink></li>
      <hr />
      <li><NavLink to="./Spotify" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Spotify</NavLink></li>
      <hr />
      <li><NavLink to="./Tweets" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Tweets</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
