import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';

import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

import Main from './components/Main';
import PageNotFound from './components/PageNotFound';
import Bonfires from './components/Bonfires';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="flex-container">
          <Header/>
          <Sidebar/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/bonfires" component={Bonfires}/>
            <Route component={PageNotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
