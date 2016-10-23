import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// from outside folder, we must specific index
import todoApp from './components/todo/reducers/index'
import AppTodo from './components/todo/components/AppTodo'

let store = createStore(todoApp)

const Todo = () => (
  <Provider store={store}>
    <AppTodo />
  </Provider>
)

export default Todo