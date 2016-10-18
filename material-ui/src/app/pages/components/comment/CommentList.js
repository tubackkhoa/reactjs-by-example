import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {  

  handleCommentDelete = (index) => { 
    // trigger to parent, then when parent state changed
    // this child is also reloaded           
    this.props.onCommentDelete(index)    
  }

  render(){

    // we should use only one () to make it easy to read
    const commentNodes = this.props.data.map((comment, index) => 
      <div className="col-md-12 row" key={comment.id}>      
        <div className="pull-left" style={{margin:'10px'}}>
          <i style={{cursor:'pointer'}} 
            onClick={() => this.handleCommentDelete(index)}
            className="fa fa-trash"></i> 
        </div>

        <Comment className="pull-left" author={comment.author}>        
          {comment.text}
        </Comment>        
      </div>
    )

    return (
      <div className="commentList">
        {commentNodes}       
      </div>
    )
  }
}

export default CommentList