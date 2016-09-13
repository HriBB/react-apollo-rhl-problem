import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './Body.scss'

export default function Body(props) {
  const { className, children } = props
  return (
    <div className={classnames('modal-body', className)}>
      {children}
    </div>
  )
}

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}
