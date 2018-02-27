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
        <td className={styles.firstCol}> {account.account_number} {account.name} </td>
        <td> {account.created_on} </td>
        <td> $ {account.membership} </td>
        <td> $ {account.coverage_level} </td>
        <td> $ {account.revenue} </td>
        <td onClick={this.openEditModal}> edit </td>
        <EditModal
          showEditModal={this.state.showEditModal}
          closeEditModal={this.closeEditModal}
        />
      </tr>
    )
  }
}

export default AccountEntry;