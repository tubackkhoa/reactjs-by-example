import React from 'react'
import Remarkable from 'remarkable'

class Comment extends React.Component {

  rawMarkup(){
    var md      = new Remarkable()
    const raw   = md.render(this.props.children.toString())    
    return { __html: raw }
  }

  render () {    
    return (
      <div className={this.props.className + " comment"}>
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

export default Comment