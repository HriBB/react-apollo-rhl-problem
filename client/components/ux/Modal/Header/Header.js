import React, { Component, PropTypes } from 'react'

import './Header.scss'

const Header = props => {
  const { children } = props
  return (
    <div className={'modal-header'}>
      {children}
    </div>
  )
}

Header.propTypes = {
  //children: PropTypes.any.isRequired,
}

export default Header
