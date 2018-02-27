import React, { Component } from 'react';
import AccountView from '../components/AccountView'
import NewModal from '../components/NewModal';
import accounts from '../accounts.json';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewModal: false,
    }
    this.openNewModal = this.openNewModal.bind(this);
    this.closeNewModal = this.closeNewModal.bind(this);
  }

  openNewModal() {
    this.setState({showNewModal: true})
  }

  closeNewModal() {
    this.setState({showNewModal: false})
  }

  render() {
    return (
      <div className="mainView">
        <h1 className={styles.mainHeader}>
          Accounts
        </h1>
        {/* <GraphView /> */}
        <button className={styles.addNew} onClick={this.openNewModal}>
          {/* plus sign */}
          <p> New </p>
        </button>
        <NewModal
          showNewModal={this.state.showNewModal}
          closeNewModal={this.closeNewModal}
        />
        <AccountView accounts={accounts} />
      </div>
    );
  }
}

export default App;
