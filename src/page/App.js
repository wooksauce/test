import React, { Component } from 'react';
import AccountView from '../components/AccountView'
import accounts from '../accounts.json';

class App extends Component {
  render() {
    return (
      <div className="mainView">
        {/* <GraphView /> */}
        <AccountView accounts={accounts} />
      </div>
    );
  }
}

export default App;
