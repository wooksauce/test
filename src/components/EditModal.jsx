import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/editModal.css'
import axios from 'axios';

class EditModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: this.props.account.firstName,
      lastName: this.props.account.lastName,
      coverageLevel: this.props.account.coverageLevel,
      membership: this.props.account.membership,
      revenue: this.props.account.revenue,
    }
    this.handleTyping = this.handleTyping.bind(this);
  }

  handleTyping(e, field) {
    let update = {};
    update[field] = e.target.value
    this.setState(update);
    console.log('states', this.state)
  }

  handleUpdate() {
    axios.put('/api/updateAccount', {
      accountNum: this.props.account.accountNum,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      coverageLevel: this.state.coverageLevel,
      membership: this.state.membership,
      revenue: this.state.revenue,
    })
    .then (() => {
      alert('update successful!');
    })
    .catch (err => {
      console.log('error updating', err);
    })
  }

  render() {
    const { accountNum, firstName, lastName, createdOn, coverageLevel, revenue, membership } = this.props.account;
    return (
      <ReactModal
        isOpen={this.props.showEditModal}
        contentLabel="onRequestClose"
        onRequestClose={this.props.closeEditModal}
        appElement={document.getElementById('app')}
        className={styles.editModal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.editHeader}>
          <p className={styles.acctNumInfo} >
            Account {displayAcctNum(accountNum)}
          </p>
        </div>
        <hr />
        <p className={styles.createdOn}>
          Created On {convertDateEditModal(createdOn)}
        </p>
        <form className={styles.editForm}>
          <div className={[styles.small, styles.smallFn].join(' ')}> First name </div>
          <input
            className={[styles.firstName, styles.newEditInput].join(' ')}
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={(e) => this.handleTyping(e, 'firstName')}
          />
          <div className={[styles.small, styles.smallLn].join(' ')}> Last name </div>
          <input
            className={[styles.lastName, styles.newEditInput].join(' ')}
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(e) => this.handleTyping(e, 'lastName')}
          />
          <div className={[styles.small, styles.smallMem].join(' ')}> Membership </div>
          <input
            className={[styles.membership, styles.newEditInput].join(' ')}
            type="text"
            name="Membership"
            value={this.state.membership}
            onChange={(e) => this.handleTyping(e, 'membership')}
          />
          <div className={[styles.small, styles.smallCover].join(' ')}> Coverage Level </div>
          <input
            className={[styles.coverageLevel, styles.newEditInput].join(' ')}
            type="text"
            name="CoverageLevel"
            value={this.state.coverageLevel}
            onChange={(e) => this.handleTyping(e, 'coverageLevel')}
          />
          <div className={[styles.small, styles.smallRev].join(' ')}> Revenue </div>
          <input
            className={[styles.revenue, styles.newEditInput].join(' ')}
            type="text"
            name="Revenue"
            value={this.state.revenue}
            onChange={(e) => this.handleTyping(e, 'revenue')}
          />
        </form>
        <button
          className={styles.updateButton}
          onClick={this.addAccount}
        >
          Update
        </button>
      </ReactModal>
    )
  }
}

const displayAcctNum = (acctNum) => {
  let num = acctNum.toString();
  return num.substring(0, 4) + ' '  + num.substring(4, 8) + ' ' + num.substring(8, 12) + ' ' + num.substring(12);
}

const convertDateEditModal = (date) => {
  const parts = date.split('-');
  const year = parts[0].substring(2);
  const month = Number(parts[1]);
  const day = Number(parts[2].substring(0,2));

  return month + '/' + day + '/' + year;
}

export default EditModal;