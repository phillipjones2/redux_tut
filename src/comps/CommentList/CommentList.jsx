import React, { Component } from 'react'
import './CommentList.styl'
import Comment from '../Comment/Comment.jsx'
import data from '../../../public/comments.json'

class CommentList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let commentNodes = data.comments.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}

export default CommentList
