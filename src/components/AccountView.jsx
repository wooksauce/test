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
      <div className={styles.tableContainer}>
        <table className={styles.accountTable}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.firstCol}> ACCOUNT </th>
              <th className={styles.createdOn}> CREATED ON </th>
              <th className={styles.membership}> MEMBERSHIP </th>
              <th className={styles.coverLvl}> COVERAGE LEVEL </th>
              <th className={styles.revenue}> REVENUE </th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {accountEntries}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AccountView;