import React, { Component, PropTypes } from 'react'

import './Close.scss'

const Close = props => {
  return (
    <button className={'modal-close'} {...props}/>
  )
}

export default Close
