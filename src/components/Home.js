import React from 'react';
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

class Home extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <Sidebar/>
        </div>
    );
  }
}

export default Home;
