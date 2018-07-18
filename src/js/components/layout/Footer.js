import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='header-text'>
        <Link to="/"> Dark Souls 3 </Link>
      </h1>
    </footer>
  );
};

export default Footer;

