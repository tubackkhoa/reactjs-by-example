
import React from 'react';
import ReactDom from 'react-dom';
import SearchPage from './SearchPage'
import config from '../../../config/app';

require("jquery");
var Cart = require('./Cart');
var state = {
  "cart": {
    "title": "My Cart",
    "items": [
      {
        "title": "Item 1",
        "price": 12
      },
      {
        "title": "Item 2",
        "price": 21
      },
      {
        "title": "Item 3",
        "price": 33
      }
    ]
  }
};

var AppRoot = React.createClass({
    propTypes: {
      state: React.PropTypes.object.isRequired // We can use state as needed ahead to initialize the App.
    },
    render()
    {
      return (
        <div>
          <h1>My React App</h1>
          <SearchPage/>
          <Cart cart={state.cart}/>
        </div>
      );
    }
  })
  ;

export default AppRoot;
