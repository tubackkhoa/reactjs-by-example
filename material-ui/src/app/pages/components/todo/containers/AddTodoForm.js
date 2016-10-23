import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      
    })
}

const validate = values => {
  const errors = {}
  const requiredFields = [ 'todo']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.todo && values.todo.length < 5) {
    errors.email = 'Length must greater than 5'    
  }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error } }) => (
  <TextField hintText={label}    
    errorText={touched && error}
    {...input}    
  />
)

const AddTodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="todo" component={renderTextField} label="Add something"/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'AddTodoForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(AddTodoForm)