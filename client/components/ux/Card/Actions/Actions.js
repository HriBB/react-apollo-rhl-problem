import React, { PropTypes } from 'react'
import classnames from 'classnames'

import './Actions.scss'

const Actions = props => {
  const { className, children, right, ...rest } = props
  const titleClass = classnames('bit-card-actions', {
    'bit-card-actions--right': right,
  }, className)
  return (
    <div className={titleClass} {...rest}>
      {children}
    </div>
  )
}

Actions.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  right: PropTypes.bool,
}

export default Actions
