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
      .then (() => {console.log('success')})
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
        <div className={styles.header}>
          Add new account
        </div>
        <hr />
        <form className={styles.newAccountInfo}>
          <input
            className={styles.firstName}
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={(e) => this.handleTyping(e, 'firstName')}
          />
          <input
            className={styles.lastName}
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={(e) => this.handleTyping(e, 'lastName')}
          />
          <input
            className={styles.membership}
            type="text"
            name="Membership"
            placeholder="Memebership"
            onChange={(e) => this.handleTyping(e, 'membership')}
          />
          <input
            className={styles.coverageLevel}
            type="text"
            name="CoverageLevel"
            placeholder="Coverage level"
            onChange={(e) => this.handleTyping(e, 'coverageLevel')}
          />
          <input
            className={styles.revenue}
            type="text"
            name="Revenue"
            placeholder="Revenue"
            onChange={(e) => this.handleTyping(e, 'revenue')}
          />
        </form>
        <button className={styles.addButton} onClick={this.addAccount}> Add </button>
      </ReactModal>
    )
  }
}

export default NewModal;