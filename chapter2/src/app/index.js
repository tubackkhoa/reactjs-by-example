import React from 'react';
import App from './App';
import {render} from 'react-dom';

var data = [{ 
  "when": "25 minutes ago",
  "who": "Jilaal Dupre",
  "description": "Created new account"
},
{
  "when": "1 hour ago",
  "who": "Losaae White",
  "description": "Added fist chapter"
}];
var headings = ['When', 'Who', 'Description'];

render(<App headings={headings} changeSets={data}/>, document.getElementById('app'));
