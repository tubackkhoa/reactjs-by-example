import React from 'react'

const UserDetail = React.createClass({

  render() {

    if(this.props.user.name) {
      return (
        <span>
          <strong>Name</strong>: {this.props.user.name}      
        </span>
      )
    }
    return null;
  }
  
})

export default UserDetail