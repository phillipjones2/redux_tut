import React, { Component } from 'react'
import './CommentList.styl'

class CommentList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentList.
      </div>
    )
  }
}

export default CommentList
