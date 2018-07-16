import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Dark Souls 3</h1>
          <ul>
            <li>Bonfires</li>
            <li>Bosses</li>
            <li>Rings</li>
            <li>Weapons</li>
            <li>Estus Shards</li>
            <li>Titanite Slabs</li>
            <li>Undead Bone Shards</li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
