import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

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
