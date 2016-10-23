// React
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'

// Redux
import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import injectTapEventPlugin from 'react-tap-event-plugin'

import { rootReducer, rootSaga } from './store/reducers'
import Root from './components/root'

// tracking css changes
import '../public/assets/main.css'

const loggerMiddleware = createLogger({ collapsed: true })

const configureStore = (initial_state, middleware) => {
	const store = createStore(
		rootReducer,
		initial_state,
		compose(
			applyMiddleware(...middleware),
			window.devToolsExtension ? window.devToolsExtension() : x => x
		)
	)

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./store/reducers', () => {
			store.replaceReducer(rootReducer)
		})
	}

	return store
}

const sagaMiddleware = createSagaMiddleware()
const initial_state = {}
// we use redux-thunk and redux-logger 
const middleware = [sagaMiddleware, thunkMiddleware, loggerMiddleware]
const store = configureStore(initial_state, middleware)
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga)

// Needed for onTouchTap
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const root = document.getElementById('root')

render(<Root store={store} history={history}/>, root)

if (module.hot) {
	module.hot.accept('./components/root', () => {
		render(
			<AppContainer>
				<Root store={store} history={history}/>
			</AppContainer>, root)
	})
}
