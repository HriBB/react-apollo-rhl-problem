import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Root from 'components/Root'

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('bit')
)
