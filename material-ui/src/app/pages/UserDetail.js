import React from 'react'
import CommentBox from './components/comment/CommentBox'

class UserDetail extends React.Component {

  render() {
    if(this.props.user.name) {
      return (
        <span>
          <strong>Name</strong>: {this.props.user.name}    
          <CommentBox url={"http://"+location.hostname + ":5000/api/comments"}
            pollInterval={2000}
          />
        </span>
      )
    }
    return null
  }
  
}

export default UserDetail