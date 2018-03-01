import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditModal from '../edit_modal/EditModal';
import { displayAcctNum, convertDateAcctEntry } from '../../utils/utils'

import styles from './accountEntry.scss';

class AccountEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditModal: false,
    }
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }

  openEditModal() {
    this.setState({showEditModal: true})
  }

  closeEditModal() {
    this.setState({showEditModal: false})
  }

  render() {
    const account = this.props.account;
    if (!account) {
      return null;
    }
    return(
      <tr className={styles.acctRow}>
        <td className={styles.firstCol}>
          <div> {displayAcctNum(account.accountNum)} </div>
          <div className={styles.name}> {account.firstName} {account.lastName} </div>
        </td>
        <td> {convertDateAcctEntry(account.createdOn)} </td>
        <td> ${account.membership} </td>
        <td> {account.coverageLevel}% </td>
        <td> ${account.revenue} </td>
        <td
          onClick={this.openEditModal}
          className={styles.editIcon}
        >
          <span
            aria-hidden="true"
            className={styles.sidecarIconEdit}
          />
        </td>
        <EditModal
          showEditModal={this.state.showEditModal}
          closeEditModal={this.closeEditModal}
          account={account}
          fetchAllAccounts={this.props.fetchAllAccounts}
        />
      </tr>
    )
  }
}

AccountEntry.propTypes = {
  account: PropTypes.object,
  fetchAllAccounts: PropTypes.func,
}

export default AccountEntry;