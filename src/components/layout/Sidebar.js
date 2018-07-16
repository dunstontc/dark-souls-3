import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    return (
      <aside className='sidebar'>
        <ul>
          <li>
            <Link to="/" className="navLink">Bonfires</Link>
          </li>
          <li>Bosses</li>
          <li>Rings</li>
          <li>Weapons</li>
          <li>Estus Shards</li>
          <li>Titanite Slabs</li>
          <li>Undead Bone Shards</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
