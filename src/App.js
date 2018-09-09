import React, { Component } from 'react';
import logo from './bank.png';


import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
        </div>
        <div>
          <Account name="Checking Account"/>
        </div>
        <div>
          <Account name="Saving Account" />
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
