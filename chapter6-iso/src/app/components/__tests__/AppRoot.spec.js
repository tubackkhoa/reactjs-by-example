// calls to unmock will automatically be hoisted to the top of the code block
// jest.enableAutomock();
// jest.unmock('../AppRoot');

// import React from 'react-addons';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppRoot from '../AppRoot';
import Cart from '../Cart';

// var TestUtils = React.addons.TestUtils;
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

describe('AppRoot', () => {

  it('renders properly', () => {
    var appRoot = TestUtils.renderIntoDocument(
      <AppRoot state={state} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(appRoot, 'h1');
    var carts = TestUtils.scryRenderedComponentsWithType(appRoot, Cart);

    expect(title.textContent).toEqual('My React App');
    expect(carts.length).toBe(1);
    expect(carts[0].props).toEqual({
      cart: state.cart
    });
  });
});
