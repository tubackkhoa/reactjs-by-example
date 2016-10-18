import React from 'react'
import {Link, IndexLink} from 'react-router'
import {List, ListItem} from 'material-ui/List'

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'

import {deepOrange500} from 'material-ui/styles/colors'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ACTIVE = { color: deepOrange500 };

// by default, the content from component will be placed in children
// and the route in the component will fetch content from children
// so call shallow render
const Home = ({ children }) => (
  
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <div>
            
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">
              <ListItem primaryText="/Home" leftIcon={<ContentInbox />} />
            </Link> 
          </li>
          <li>
            <Link to="/app">
              <ListItem primaryText="/App" />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <ListItem primaryText="/Search" />
            </Link>
          </li>
          <li>
            <Link to="/users">
              <ListItem primaryText="/Users" />
            </Link>
          </li>          
          <li>
            <Link to="/about">
              <ListItem primaryText="/About" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
  </MuiThemeProvider>        
  
);


export default Home