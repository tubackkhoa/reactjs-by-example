import React from 'react';
// import direct function
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<App />, document.getElementById('app'));
