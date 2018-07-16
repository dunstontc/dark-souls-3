import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Main from './layout/Main';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flex-container">
          <Header/>
          <Sidebar/>
          <Main/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
