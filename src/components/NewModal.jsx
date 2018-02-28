import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/newModal.scss';
import axios from 'axios';

class NewModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      membership: '',
      coverageLevel: '',
      revenue: '',
    }
    this.handleTyping = this.handleTyping.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  handleTyping(e, field) {
    let update = {};
    update[field] = e.target.value
    this.setState(update);
  }

  addAccount() {
    axios.post('/api/addNewAccount', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      membership: this.state.membership,
      coverageLevel: this.state.coverageLevel,
      revenue: this.state.revenue,
    })
      .then (() => {
        this.props.fetchAllAccounts();
        alert('Account added successfully!')
      })
      .catch (err => {
        console.log('error occured while saving', err)
      })
    this.props.closeNewModal();
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.showNewModal}
        contentLabel="onRequestClose"
        onRequestClose={this.props.closeNewModal}
        appElement={document.getElementById('app')}
        className={styles.newModal}
        overlayClassName={styles.overlay}
      >
        <span
          aria-hidden="true"
          className={styles.sidecarIconX}
          onClick={this.props.closeNewModal}
        />
        <div className={styles.header}>
          Add new account
        </div>
        <hr />
        <form className={styles.newAccountInfo}>
          <div className={styles.fieldContainer}>
            <div className={[styles.small, styles.smallFn].join(' ')}> First name </div>
            <input
              className={[styles.firstName, styles.newModalInput].join(' ')}
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={(e) => this.handleTyping(e, 'firstName')}
            />
          </div>
          <div className={styles.fieldContainer}>
            <div className={[styles.small, styles.smallLn].join(' ')}> Last name </div>
            <input
              className={[styles.lastName, styles.newModalInput].join(' ')}
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => this.handleTyping(e, 'lastName')}
            />
          </div>
          <div className={styles.fieldContainer}>
            <div className={[styles.small, styles.smallMem].join(' ')}> Membership </div>
            <input
              className={[styles.membership, styles.newModalInput].join(' ')}
              type="text"
              name="Membership"
              placeholder="Memebership"
              onChange={(e) => this.handleTyping(e, 'membership')}
            />
          </div>
          <div className={styles.fieldContainer}>
            <div className={[styles.small, styles.smallCover].join(' ')}> Coverage Level </div>
            <input
              className={[styles.coverageLevel, styles.newModalInput].join(' ')}
              type="text"
              name="CoverageLevel"
              placeholder="Coverage level"
              onChange={(e) => this.handleTyping(e, 'coverageLevel')}
            />
          </div>
          <div className={styles.fieldContainer}>
            <div className={[styles.small, styles.smallRev].join(' ')}> Revenue </div>
            <input
              className={[styles.revenue, styles.newModalInput].join(' ')}
              type="text"
              name="Revenue"
              placeholder="Revenue"
              onChange={(e) => this.handleTyping(e, 'revenue')}
            />
          </div>
        </form>
        <button className={styles.addButton} onClick={this.addAccount}> Add </button>
      </ReactModal>
    )
  }
}

export default NewModal;