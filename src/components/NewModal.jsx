import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/newModal.scss'

class NewModal extends Component {
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
            name="FirstName"
            placeholder="First name"
          />
          <input
            className={styles.lastName}
            type="text"
            name="LastName"
            placeholder="Last name"
          />
          <input type="text" name="Membership" placeholder="Memebership" />
          <input type="text" name="CoverageLevel" placeholder="Coverage level" />
          <input type="text" name="Revenue" placeholder="Revenue" />
        </form>
        <button className={styles.addButton}> Add </button>
      </ReactModal>
    )
  }
}

export default NewModal;