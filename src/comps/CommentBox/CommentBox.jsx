import React, { Component } from 'react'
import './CommentBox.styl'
import CommentList from '../CommentList/CommentList.jsx'
import CommentForm from '../CommentForm/CommentForm.jsx'

class CommentBox extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox
