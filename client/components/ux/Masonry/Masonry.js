import React, { PropTypes } from 'react'
import ReactMasonry from 'react-masonry-component'
import classnames from 'classnames'

import './Masonry.scss'

const masonryOptions = {
  itemSelector: '.masonry__item',
  columnWidth: '.masonry__sizer',
  percentPosition: false,
  transitionDuration: 0,
}

const Masonry = props => {
  const { big, children, className } = props
  const masonryClass = classnames({
    'masonry': true,
    'masonry--big': big,
  }, className)
  return (
    <div className={'masonry-container'}>
      <ReactMasonry className={masonryClass} options={masonryOptions}>
        <div className={'masonry__sizer'}></div>
        {children}
      </ReactMasonry>
    </div>
  )
}

Masonry.propTypes = {
  big: PropTypes.bool,
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default Masonry
