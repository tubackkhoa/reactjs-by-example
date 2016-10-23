import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// all pages
import AppPage from './pages/AppPage'
import Home from './pages/Home'
import Index from './pages/Index'
import Users from './pages/Users'
import UsersIndex from './pages/UsersIndex'
import User from './pages/User'
import About from './pages/About'
import Search from './pages/Search'
import Todo from './pages/Todo'

const routes = (
  
        <Route path="/" component={Home}>
          <IndexRoute component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/app" component={AppPage}/>
          <Route path="/search" component={Search}/>
          <Route path="/users" component={Users}>     
            <IndexRoute component={UsersIndex}/>   
            <Route path=":id" component={User}/>
          </Route>
          <Route path="/todo" component={Todo}/>
        </Route>
      
)

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      {routes}
      </Router>
    )
  }
}