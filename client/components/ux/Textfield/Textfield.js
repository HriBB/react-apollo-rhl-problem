import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './Textfield.scss'

const Textfield = props => {
  const { className, ...rest } = props
  return (
    <input
      className={classnames('bit-textfield', className)}
      {...rest}
      type={'text'}
    />
  )
}

Textfield.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Textfield
