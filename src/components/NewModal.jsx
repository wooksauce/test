import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './styles/newModal.css'

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
      />
    )
  }
}

export default NewModal;