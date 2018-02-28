import React, { Component } from 'react';
import styles from './styles/accountEntry.css';
import EditModal from './EditModal';

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
    return(
      <tr>
        <td className={styles.firstCol}>
          <div> {displayAcctNum(account.accountNum)} </div>
          <div>{account.firstName} {account.lastName} </div>
        </td>
        <td> {convertDate(account.createdOn)} </td>
        <td> ${account.membership} </td>
        <td> {account.coverageLevel}% </td>
        <td> ${account.revenue} </td>
        <td onClick={this.openEditModal}> edit </td>
        <EditModal
          showEditModal={this.state.showEditModal}
          closeEditModal={this.closeEditModal}
          account={account}
          covertDate={convertDate}
          fetchAllAccounts={this.props.fetchAllAccounts}
        />
      </tr>
    )
  }
}

const displayAcctNum = (acctNum) => {
  let num = acctNum.toString();
  return num.substring(0, 4) + ' '  + num.substring(4, 8) + ' ' + num.substring(8, 12) + ' ' + num.substring(12);
}

const convertDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parts = date.split('-');
  const year = parts[0];
  const month = months[Number(parts[1]) - 1];
  const day = Number(parts[2].substring(0,2));

  return month + ' ' + day + ' ' + year;
}

export default AccountEntry;