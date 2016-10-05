import React, { Component } from 'react'
import './Comments.styl'
import CommentList from '../CommentList/CommentList.jsx'
import CommentForm from '../CommentForm/CommentForm.jsx'

class Comments extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="comments">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}

export default Comments
