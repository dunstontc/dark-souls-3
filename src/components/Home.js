import React from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';

class Home extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <Sidebar/>
          <Footer/>
        </div>
    );
  }
}

export default Home;
