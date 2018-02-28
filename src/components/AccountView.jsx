import React, { Component } from 'react';
import AccountEntry from './AccountEntry';
import styles from './styles/accountView.css';

class AccountView extends Component {

  makeEntries(accounts = []) {
    if (accounts.length) {
      return accounts.map((account) =>
        <AccountEntry
          account={account}
          key={account.accountNum}
          fetchAllAccounts={this.props.fetchAllAccounts}
        />
      )
    }
  }

  render() {
    const accounts = this.props.accounts;
    if (!accounts || !accounts.length) {
      return null;
    }
    const accountEntries = this.makeEntries(accounts);

    return (
      <table className={styles.accountTable}>
        <thead>
          <tr>
            <th className={styles.firstCol}> ACCOUNT </th>
            <th> CREATED ON </th>
            <th> MEMBERSHIP </th>
            <th> COVERAGE LEVEL </th>
            <th> REVENUE </th>
          </tr>
        </thead>
        <tbody>
          {accountEntries}
        </tbody>
      </table>
    )
  }
}

export default AccountView;