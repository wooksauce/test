import React, { Component } from 'react';
import AccountEntry from './AccountEntry';
import styles from './AccountView.css';

class AccountView extends Component {
  render() {
    console.log('styles', styles)
    const accounts = this.props.accounts;
    if (!accounts || !accounts.length) {
      return null;
    }
    const accountEntries = makeEntries(accounts);

    return (
      <table className="accountTable">
        <thead>
          <tr>
            <th className="firstCol"
            > ACCOUNT </th>
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

const makeEntries = (accounts = []) => {
  if (accounts.length) {
    return accounts.map((account) =>
      <AccountEntry
        account={account}
        key={account.account_number}
      />
    )
  }
}

export default AccountView;