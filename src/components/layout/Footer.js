import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <header className='header'>
      <h1 className='header-text'>
        <Link to="/" exact={true}>
          Dark Souls 3
        </Link>
      </h1>
    </header>
  );
};

export default Footer;
