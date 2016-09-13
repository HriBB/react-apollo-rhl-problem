import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './Title.scss'

const Title = props => {
  const { className, children, ...rest } = props
  const titleClass = classnames('bit-card-title', className)
  return (
    <h2 className={titleClass} {...rest}>
      {children}
    </h2>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default Title
