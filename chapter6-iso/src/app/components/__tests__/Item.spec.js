// calls to unmock will automatically be hoisted to the top of the code block
// jest.enableAutomock();
// jest.unmock('../Item');

// import React from 'react-addons';
import React from 'react';
import Item from '../Item';
import TestUtils from 'react-addons-test-utils';
// var TestUtils = React.addons.TestUtils;
var itemProp = {
  title: 'Item 1',
  price: 12
};

describe('Item', () => {

  it('renders properly', () => {
    var item = TestUtils.renderIntoDocument(
      <Item item={itemProp} />
    );

    var li = TestUtils.findRenderedDOMComponentWithTag(item, 'li');

    expect(li.textContent).toEqual('Item 1 - $12');
  });
});
