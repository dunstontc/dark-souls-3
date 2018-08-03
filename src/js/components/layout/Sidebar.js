import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    return (
      <aside className='sidebar'>
        <ul>
          <li><Link to="/bonfires"      className="navLink">Bonfires          </Link></li>
          <li><Link to="/bosses"        className="navLink">Bosses            </Link></li>
          <li><Link to="/rings"         className="navLink">Rings             </Link></li>
          <li><Link to="/weapons"       className="navLink">Weapons           </Link></li>
          <li><Link to="/collectables"  className="navLink">Collectables </Link></li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
