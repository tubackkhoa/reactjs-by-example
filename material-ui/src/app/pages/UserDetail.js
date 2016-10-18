import React from 'react'
import CommentBox from './components/comment/CommentBox'

const data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]

class UserDetail extends React.Component {

  render() {
    if(this.props.user.name) {
      return (
        <span>
          <strong>Name</strong>: {this.props.user.name}    
          <CommentBox url="http://localhost:5000/api/comments"
            pollInterval={2000}
          />
        </span>
      )
    }
    return null
  }
  
}

export default UserDetail