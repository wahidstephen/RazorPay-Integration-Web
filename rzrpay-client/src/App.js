import React from 'react';
import './App.css';
import { ReactComponent as AsteriskSvg } from './assets/noun_Asterisk_2417419.svg';
import { ReactComponent as NotificationSvg } from './assets/noun_notification_2496093.svg';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Payment from './Payment';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          LEVEL
        </div>
        <div className="header-toolbar">
          <AsteriskSvg className="header-svgs" />
          <NotificationSvg className="header-svgs" />
          <div className="profile-pic" />
        </div>
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/payment' component={Payment}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
