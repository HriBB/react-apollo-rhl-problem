import React, { Component, PropTypes } from 'react'
import ReactModal from 'react-modal'

import './Modal.scss'

const styles = {
  overlay : {
    position: 'fixed',
    zIndex: '9999',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content : {
    position: 'absolute',
    zIndex: '9999',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    minWidth: '300px',
    minHeight: '200px',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
  }
}

const Modal = props => {
  const { children, ...rest } = props
  return (
    <ReactModal {...rest} style={styles}>
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.any.isRequired,
}

export default Modal
