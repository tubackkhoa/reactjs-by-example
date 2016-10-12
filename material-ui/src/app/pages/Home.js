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

const Home = ({ children }) => (
  
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <div>
    <h1>APP!</h1>    
    <List>

      <Link to="/" activeStyle={ACTIVE}>
        <ListItem primaryText="/Home" leftIcon={<ContentInbox />} />
      </Link>
      
      <Link to="/app" activeStyle={ACTIVE}>
        <ListItem primaryText="/App" leftIcon={<ContentSend />} />
      </Link>

      <Link to="/search" activeStyle={ACTIVE}>
        <ListItem primaryText="/Search" leftIcon={<ContentSend />} />
      </Link>

      <Link to="/users" activeStyle={ACTIVE}>
        <ListItem primaryText="/Users" leftIcon={<ContentDrafts />} />
      </Link>

      <Link to="/users/ryan" activeStyle={ACTIVE}>
        <ListItem primaryText="/Users/ryan" leftIcon={<ContentInbox />} />
      </Link>

      <Link to="/users/ryan?name=nmtnmt" activeStyle={ACTIVE}>
        <ListItem primaryText="/Users/ryan?name=nmtnmt" leftIcon={<ContentInbox />} />
      </Link>

      <Link to="/about" activeStyle={ACTIVE}>
        <ListItem primaryText="/About" leftIcon={<ContentInbox />} />
      </Link>

    </List>    
    {children}
  </div>
  </MuiThemeProvider>        
  
);


export default Home