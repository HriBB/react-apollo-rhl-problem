import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import './IconLink.scss'

const IconLink = props => {
  const { className, name, ...rest } = props
  const buttonClass = classnames('bit-icon-link', className)
  const iconClass = classnames(`icon-${name}`)
  return (
    <Link className={buttonClass} {...rest}>
      <i className={iconClass}/>
    </Link>
  )
}

IconLink.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default IconLink
