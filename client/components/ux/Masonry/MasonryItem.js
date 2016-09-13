import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

const MasonryItem = props => {
  const { big, children, className } = props
  const itemClass = classnames({
    'masonry__item': true,
    'masonry__item--big': big,
  }, className)
  return (
    <div className={itemClass}>
      {children}
    </div>
  )
}

MasonryItem.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default MasonryItem
