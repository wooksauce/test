import React, { Component } from 'react';
import styles from './App.scss';
import axios from 'axios';

import AccountView from '../components/AccountView';
import NewModal from '../components/NewModal';
// import GraphView from '../components/GraphView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accounts: [],
      showNewModal: false,
    }
    this.openNewModal = this.openNewModal.bind(this);
    this.closeNewModal = this.closeNewModal.bind(this);
    this.fetchAllAccounts = this.fetchAllAccounts.bind(this);
  }

  componentDidMount() {
    this.fetchAllAccounts();
  }

  fetchAllAccounts() {
    axios.get('api/allAccounts')
    .then(({ data }) => {
      this.setState({accounts: data})
    })
    .catch(err => {
      console.log('error fetching accounts', err);
    })
  }

  openNewModal() {
    this.setState({showNewModal: true})
  }

  closeNewModal() {
    this.setState({showNewModal: false})
  }

  render() {
    return (
      <div className={styles.basepage}>
        <div className={styles.sideStrip}>
        </div>
        <div className={styles.mainView}>
          <h1 className={styles.mainHeader}>
            Accounts
          </h1>
          {/* <GraphView accounts={this.state.accounts}/> */}
          <button className={styles.addNew} onClick={this.openNewModal}>
            {/* plus sign */}
            <p> New </p>
          </button>
          <NewModal
            showNewModal={this.state.showNewModal}
            closeNewModal={this.closeNewModal}
            fetchAllAccounts={this.fetchAllAccounts}
          />
          <AccountView
            accounts={this.state.accounts}
            fetchAllAccounts={this.fetchAllAccounts}
          />
        </div>
      </div>
    );
  }
}

export default App;
