import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import axios from 'axios';

import { displayAcctNum, convertDateEditModal } from '../../utils/utils'
import styles from './editModal.scss'

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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTyping(e, field) {
    if (e && field && e.target) {
      this.setState({
        [field]: e.target.value
      });
      console.log('states', this.state)
    }
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
      this.props.fetchAllAccounts();
    })
    .catch (err => {
      console.log('error updating', err);
    })
    this.props.closeEditModal();
  }

  handleDelete() {
    if (confirm('You sure?')) {
      axios.delete(`/api/deleteAccount/${this.props.account.accountNum}`)
      .then (() => {
        this.props.fetchAllAccounts();
      })
      .catch (err => {
        console.log('error deleting', err);
      })
      this.props.closeEditModal();
    }
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
          <p className={styles.acctNumInfo}>
            Account {displayAcctNum(accountNum)}
          </p>
          <span
            aria-hidden="true"
            className={styles.sidecarIconTrash}
            onClick={this.handleDelete}
          />
          <span
            aria-hidden="true"
            className={styles.sidecarIconX}
            onClick={this.props.closeEditModal}
          />
        </div>
        <hr />
        <p className={styles.createdOn}>
          Created on <span className={styles.date}> {convertDateEditModal(createdOn)} </span>
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
          onClick={this.handleUpdate}
        >
          Update
        </button>
      </ReactModal>
    )
  }
}

EditModal.propTypes = {
  showEditModal: PropTypes.bool,
  closeEditModal: PropTypes.func,
  account: PropTypes.object,
  fetchAllAccounts: PropTypes.func,
}

export default EditModal;