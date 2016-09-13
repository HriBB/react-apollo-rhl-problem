import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from 'components/Root'

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('bit')
)

if (module.hot) {
  module.hot.accept('components/Root', () => {
    const NextRoot = require('components/Root').default
    render(
      <AppContainer>
        <NextRoot/>
      </AppContainer>,
      document.getElementById('bit')
    )
  })
}
