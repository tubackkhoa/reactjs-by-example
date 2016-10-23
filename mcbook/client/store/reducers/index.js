import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fork } from 'redux-saga/effects';

import { asyncFetchReducer, asyncFetchWatchers } from './async_fetch_reducer';
import { postsBySubreddit, selectedSubreddit } from './reddit_reducer';
import { menuReducer } from './menu_reducer';
import { byId, ids, openNoteId, toast, requests } from './note_reducer';

export const rootReducer = combineReducers({
	routing: routerReducer,
	asyncFetchReducer,  

  postsBySubreddit,
  selectedSubreddit,

	menuReducer,

  notes: combineReducers({
    byId,
    ids,
  }),

  ui: combineReducers({
    openNoteId,
    toast,
  }),

  requests,

});


export const rootSaga = function* () {
	yield [
		...asyncFetchWatchers.map(watcher => fork(watcher))
	];
};

