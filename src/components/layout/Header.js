import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-text'>
        <Link to="/">
          Dark Souls 3
        </Link>
      </h1>
    </header>
  );
};

export default Header;

