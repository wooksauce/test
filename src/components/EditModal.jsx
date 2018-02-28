import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/editModal.css'

class EditModal extends Component {

  render() {
    return (
      <ReactModal
        isOpen={this.props.showEditModal}
        contentLabel="onRequestClose"
        onRequestClose={this.props.closeEditModal}
        appElement={document.getElementById('app')}
        className={styles.editModal}
        overlayClassName={styles.overlay}
      />
    )
  }
}

export default EditModal;