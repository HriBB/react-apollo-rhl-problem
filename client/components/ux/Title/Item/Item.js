import React, { Component, PropTypes } from 'react'

import './Item.scss'

const Item = props => <span className={'bit-title-item'}>{props.children}</span>

export default Item
