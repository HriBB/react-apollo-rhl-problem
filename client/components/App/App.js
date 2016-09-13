import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import 'normalize.css'
import './App.scss'

const App = props => {
  const { children, routes } = props
  const admin = routes[1].path === 'admin'
  const active = (admin ? routes[2].path : routes[1].path) || 'home'
  return (
    <div className={'bit-app'}>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any.isRequired,
}

export default App
