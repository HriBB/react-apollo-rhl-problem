import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './Content.scss'

const Content = props => {
  const { className, children } = props
  return (
    <div className={classnames('modal-content', className)}>
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Content
