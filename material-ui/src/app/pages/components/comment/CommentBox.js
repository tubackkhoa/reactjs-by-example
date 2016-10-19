import React from 'react'
import update from 'react-addons-update'
import CommentList from './CommentList'
import CommentForm from './CommentForm'


class CommentBox extends React.Component {

  state = { data: [] }  

  // after ready to render, with babel, this is not a default with binding 
  // from click or setInterval, which is not method function, anymore
  // we have to bind it for specification
  componentDidMount(){
    this.loadCommentsFromServer()
    // $(this.refs.title).text("ngon vai")
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval)    
  }

  // use arrow function to avoid using anonymous problem with binding
  // with promise, we have to apply function one by one
  loadCommentsFromServer = (options, revert) => {
    fetch(this.props.url, options)
    .then(response => {          
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
    .then(ret => ret.json())
    .then(json => this.setState({data: json}))
    .catch(ex => {
      if(revert){
        this.setState({data: revert})  
      }      
      console.log('Parsing failed: '+this.props.url, ex)
    })
  }

  handleCommentDelete = (index) => {
    // update method is so good
    let comments = this.state.data    
    this.setState({
      data: update(comments, {$splice: [[index, 1]]})
    })    

    this.loadCommentsFromServer({
      method: 'DELETE',
      headers: {        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({index: index})
    }, comments)
  }

  handleCommentSubmit = (comment) => {

    let comments = this.state.data         
    comment.id = Date.now()

    this.setState({
      data: update(comments, {$push: [comment]})
    }) 

    this.loadCommentsFromServer({
      method: 'POST',
      headers: {        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }, comments)
  }

  render(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList onCommentDelete={this.handleCommentDelete} 
          data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
}

export default CommentBox