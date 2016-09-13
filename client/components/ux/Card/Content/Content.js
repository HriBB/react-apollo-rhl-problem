import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './Content.scss'

const Content = props => {
  const { className, children, ...rest } = props
  const contentClass = classnames('bit-card-content', className)
  return (
    <p className={contentClass} {...rest}>
      {children}
    </p>
  )
}

Content.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default Content
