// calls to unmock will automatically be hoisted to the top of the code block
// jest.enableAutomock();
// jest.unmock('../app');

var App = require('../app');

var state = {
  cart: {
    title: 'title',
    items: []
  }
};

describe('App', function () {

  // new javascript syntax removed App(), instead you should use App.default as
  // the constructor
  var app = new App.default({ state: state });

  it('renders to string', function () {  
    expect(typeof app.renderToString()).toBe('string');
 });
});
