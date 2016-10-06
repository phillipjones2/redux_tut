import React, { Component } from 'react'
import './Comment.styl'

class Comment extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
}

Comment.propTypes = {
  author: React.PropTypes.string,
  children: React.PropTypes.string
}

export default Comment
