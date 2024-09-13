import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram,faFacebookSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
  const iconStyle = {
    color: 'red',
  };
  return (
    <footer>
      <ul>
        <li><FontAwesomeIcon icon={faSquareInstagram} style={iconStyle}/></li>
        <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
        <li><FontAwesomeIcon icon={faLinkedin} className='abc'/></li>
      </ul>
    </footer>
  );
}

export default Footer;
