import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './index'
import Main from './main'
import RouteExample1 from './route_example_1'
import RouteExample2 from './route_example_2'
import RedditApp from './reddit'
import NoteApp from './note'

import { requestAsyncFetchAction } from '../store/reducers/async_fetch_reducer'

// An example of how to initialize stateless component data asynchronously
const onEnterAction = (store, url) => {
	const dispatchAction = requestAsyncFetchAction(url)
	return (nextState, replace) => {
		store.dispatch(dispatchAction)
	}
}

export const Routes = (store) => (
	<Route path='/' component={Main}>
		<IndexRoute component={Index}/>
		<Route path='/route_example_1' component={RouteExample1} onEnter={onEnterAction(store, 'http:localhost:3000/api/notes')}/>
		<Route path='/route_example_2' component={RouteExample2}/>
    <Route path='/reddit' component={RedditApp}/>
    <Route path='/note' component={NoteApp}/>
	</Route>
)
