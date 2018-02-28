import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/editModal.css'

class EditModal extends Component {

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
          Account {accountNum}
        </div>
        <hr />
        <div className={styles.createdOn}>
          Created On {convertDateEditModal(createdOn)}
        </div>
        <form className={styles.editForm}>
          <input
            className={styles.firstName}
            type="text"
            name="firstName"
            placeholder="First name"
            // onChange={(e) => this.handleTyping(e, 'firstName')}
          />
          <input
            className={styles.lastName}
            type="text"
            name="lastName"
            placeholder="Last name"
            // onChange={(e) => this.handleTyping(e, 'lastName')}
          />
          <input
            className={styles.membership}
            type="text"
            name="Membership"
            placeholder="Memebership"
            // onChange={(e) => this.handleTyping(e, 'membership')}
          />
          <input
            className={styles.coverageLevel}
            type="text"
            name="CoverageLevel"
            placeholder="Coverage level"
            // onChange={(e) => this.handleTyping(e, 'coverageLevel')}
          />
          <input
            className={styles.revenue}
            type="text"
            name="Revenue"
            placeholder="Revenue"
            // onChange={(e) => this.handleTyping(e, 'revenue')}
          />
        </form>
      </ReactModal>
    )
  }
}

const convertDateEditModal = (date) => {
  const parts = date.split('-');
  const year = parts[0].substring(2);
  const month = Number(parts[1]);
  const day = Number(parts[2].substring(0,2));

  return month + '/' + day + '/' + year;
}

export default EditModal;