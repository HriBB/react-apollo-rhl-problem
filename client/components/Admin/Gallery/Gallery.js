import React, { Component, Children, PropTypes, cloneElement } from 'react'
import { Link } from 'react-router'

import Modal from 'components/ux/Modal'
import AddGallery from './AddGallery'

export default class Gallery extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      addGallery: false,
    }
    this.addGallery = this.addGallery.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  addGallery() {
    this.setState({ addGallery: true })
  }

  closeModal() {
    this.setState({
      addGallery: false,
    })
  }

  render() {
    const { children } = this.props
    const { addGallery } = this.state
    return (
      <div>

        {Children.map(children, child => cloneElement(child, {
          actions: {
            addGallery: this.addGallery,
          }
        }))}

        {addGallery &&
          <Modal isOpen onRequestClose={this.closeModal}>
            <AddGallery close={this.closeModal}/>
          </Modal>}

      </div>
    )
  }
}
