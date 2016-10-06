import React, { Component } from 'react'
import './CommentList.styl'
import Comment from '../Comment/Comment.jsx'

class CommentList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Phillip Jones">Another Comment</Comment>
      </div>
    )
  }
}

export default CommentList
