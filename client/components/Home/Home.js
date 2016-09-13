import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className={'bit-home'}>
        <Link style={{margin:'20px'}} to={'/admin/gallery'}>Go To Gallery</Link>
      </div>
    )
  }
}
