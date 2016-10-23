import React from 'react'
import {Link, IndexLink} from 'react-router'
import {List, ListItem} from 'material-ui/List'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
// should import subpackage

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'

import {deepOrange500,cyan500} from 'material-ui/styles/colors'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
})

// by default, the content from component will be placed in children
// and the route in the component will fetch content from children
// so call shallow render
const Home = ({ children }) => (
  
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar title="MCBook" />          
      <nav>        
        <Link to="/">
          <FlatButton label="Home" icon={<ContentInbox />} primary={true} />
        </Link>
        <Link to="/app">
          <FlatButton label="App" />
        </Link>
        <Link to="/search">
          <FlatButton label="Search" />
        </Link>
        <Link to="/users">
          <FlatButton label="Users" />
        </Link>
        <Link to="/about">
          <FlatButton label="About" />
        </Link>
        <Link to="/todo">
          <FlatButton label="Todo" />
        </Link>
      </nav>      
      
      <div className="container">
        {children}
      </div>
    </div>
  </MuiThemeProvider>        
  
)

export default Home