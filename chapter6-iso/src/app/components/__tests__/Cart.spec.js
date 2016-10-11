// calls to unmock will automatically be hoisted to the top of the code block
// jest.enableAutomock();
// jest.unmock('../Cart');

// import React from 'react-addons';
import React from 'react';
import Cart from '../Cart';
import Item from '../Item';
import TestUtils from 'react-addons-test-utils';
// var TestUtils = React.addons.TestUtils;
var cartProp = {
  title: 'My Cart',
  items: [
    {
      title: 'Item 1',
      price: 12
    },
    {
      title: 'Item 2',
      price: 21
    },
    {
      title: 'Item 3',
      price: 33
    }
  ]
};

describe('Cart', () => {

  it('renders properly', () => {
    var cart = TestUtils.renderIntoDocument(
      <Cart cart={cartProp} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(cart, 'h2');
    // foretell using a crystall :v
    var items = TestUtils.scryRenderedComponentsWithType(cart, Item);

    expect(title.textContent).toEqual('My Cart');
    expect(items.length).toBe(3);
    expect(items[0].props).toEqual({
      item: cartProp.items[0]
    });
  });
});
