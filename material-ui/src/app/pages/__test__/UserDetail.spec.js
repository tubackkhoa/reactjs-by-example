import React from 'react'
import TestUtils from 'react-addons-test-utils'
import UserDetail from '../UserDetail'

var state = {
  user: {
    name: 'tupt'    
  }
};

describe('User', () => {

  it('renders properly', () => {
    var item = TestUtils.renderIntoDocument(
      <UserDetail {...state} />
    );
    
    var el = TestUtils.findRenderedDOMComponentWithTag(item, 'span');
    expect(el.textContent).toEqual('Name: ' + state.user.name);
  });
});