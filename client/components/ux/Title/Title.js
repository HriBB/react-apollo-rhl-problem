import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './Title.scss'

const Title = props => {
  const { children, className, left, right, center, ...rest } = props
  const titleClass = classnames({
    'bit-title': true,
    'bit-title--left': left,
    'bit-title--right': right,
    'bit-title--center': right,
  }, className)
  return (
    <h1 className={titleClass} {...rest}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
}

export default Title
