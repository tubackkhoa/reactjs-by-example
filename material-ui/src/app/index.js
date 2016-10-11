import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { useBasename } from 'history'

// all pages
import App from './pages/App'
import Home from './pages/Home'
import Index from './pages/Index'
import Users from './pages/Users'
import UsersIndex from './pages/UsersIndex'
import User from './pages/User'
import About from './pages/About'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

/* Comment out these lines to support router via hash */
// import {useRouterHistory} from 'react-router'
// import {createHashHistory} from 'history'
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const appHistory = useBasename(() => browserHistory)({ queryKey: false })

render((
  <Router history={appHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/app" component={App}/>
      <Route path="/users" component={Users}>     
        <IndexRoute component={UsersIndex}/>   
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))