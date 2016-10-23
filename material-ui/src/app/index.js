import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { AppContainer } from 'react-hot-loader'
import App from './App'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import s from '../www/main.css';

render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('app'))

if (module.hot) {
  // custom hot reload here
  module.hot.accept('./App', () => {        
    const NextApp = require('./App').default
    render((
      <AppContainer>
         <NextApp />
      </AppContainer>
      ), document.getElementById('app'))    
  })
}