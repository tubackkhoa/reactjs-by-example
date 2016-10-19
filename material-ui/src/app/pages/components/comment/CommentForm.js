import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// we import material icon font from server
import FontIcon from 'material-ui/FontIcon'


class CommentForm extends React.Component{

  state = {
    author : '',
    text   : ''
  }      

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value})
  }

  handleTextChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var author = this.state.author.trim()
    var text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({author:author, text: text})
    this.setState({author: '', text: ''})
  }

  render(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.author}
          hintText="Your name"
          onChange={this.handleAuthorChange}
        /><br />

        <TextField
          value={this.state.text}
          hintText="Say something.."
          onChange={this.handleTextChange}
        /><br />
        <RaisedButton
          label="Post"          
          secondary={true}
          type="submit"
          icon={<FontIcon className="material-icons">save</FontIcon>}
        />        
        
      </form>
    )
  }
}

export default CommentForm