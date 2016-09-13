import React, { Component, PropTypes } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, browserHistory } from 'react-router'

import client from 'apollo/client'
import routes from 'routes'

export default class Root extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </ApolloProvider>
    )
  }

}
