import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// all pages
import App from './pages/App'
import Home from './pages/Home'
import Index from './pages/Index'
import Users from './pages/Users'
import UsersIndex from './pages/UsersIndex'
import User from './pages/User'
import About from './pages/About'
import Search from './pages/Search'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

/* Comment out these lines to support router via hash */
// import {hashHistory} from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/app" component={App}/>
      <Route path="/search" component={Search}/>
      <Route path="/users" component={Users}>     
        <IndexRoute component={UsersIndex}/>   
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))