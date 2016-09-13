import React, { Component, PropTypes } from 'react'

import './Title.scss'

const Title = props => {
  const { children } = props
  return (
    <h1 className={'modal-title'}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Title
