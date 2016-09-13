import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './Textarea.scss'

const Textarea = props => {
  const { className, ...rest } = props
  return (
    <textarea
      className={classnames('bit-textarea', className)}
      {...props}
    />
  )
}

Textarea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Textarea
