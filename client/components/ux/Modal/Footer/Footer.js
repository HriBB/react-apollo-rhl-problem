import React, { Component, PropTypes } from 'react'

import './Footer.scss'

const Footer = props => {
  const { children } = props
  return (
    <div className={'modal-footer'}>
      {children}
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Footer
