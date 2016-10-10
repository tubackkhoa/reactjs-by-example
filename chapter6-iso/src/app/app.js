// import React from 'react-addons';
import React from 'react';
import ReactDom from 'react-dom';
import AppRoot from './components/AppRoot';


class App {

  constructor(options) {

    this.state = options.state;
  }

  render(element) {


    // would be in JSX: <AppRoot state={this.state} />
    var appRootElement =  <AppRoot state={this.state} />;

    // render to DOM
    if (element) {
      ReactDom.render(appRootElement, element);
      return;
    }

    // render to string
    return ReactDom.renderToString(appRootElement);
  }

  renderToDOM(element) {
    if (!element) {
      new Error('App.renderToDOM: element is required');
    }

    this.render(element);
  }

  renderToString() {
    return this.render();
  }
}

export default App;
