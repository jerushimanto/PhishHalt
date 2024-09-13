import React, { useState } from 'react';
import './navbar.css';
import Logo from '../images/logofull.png';
import LogoG from '../images/logog.gif';

function NavBar(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav>
      <img
        src={isHovered ? LogoG : Logo}
        alt="logo"
        height="90px"
        width="150px"
        id="logo"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/check">Services</a></li>
        <li><a href="/info">About</a></li>
        <li><a href="/info">Help</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
