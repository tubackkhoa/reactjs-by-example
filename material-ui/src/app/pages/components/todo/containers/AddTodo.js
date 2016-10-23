import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import AddTodoForm from './AddTodoForm'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// we import material icon font from server
import FontIcon from 'material-ui/FontIcon'

// get prop direct here
class AddTodo extends React.Component {    

  handleAddTodo = (e) => {
    e.preventDefault()
    const value = this.refs.todoField.getValue().trim()
    if (!value) {
      return
    }
    this.props.dispatch(addTodo(value))  
    this.refs.todoField.input.value = ''
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleAddTodo}>          
          <TextField ref="todoField"      
            hintText="Add something.."          
          />
          <RaisedButton
            label="Add Todo"          
            secondary={true}
            type="submit"
            icon={<FontIcon className="material-icons">save</FontIcon>}
          />    
        </form>
      </div>
    )

  }
}

// connect to get dispatch
AddTodo = connect()(AddTodo)

export default AddTodo
