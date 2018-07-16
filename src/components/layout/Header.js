import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Dark Souls</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;

