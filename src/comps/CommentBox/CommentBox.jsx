import React, { Component } from 'react'
import './CommentBox.styl'
import CommentList from '../CommentList/CommentList.jsx'
import CommentForm from '../CommentForm/CommentForm.jsx'

class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      h1ClassName: true
    }
    this.changeClass = this.changeClass.bind(this)
  }
  changeClass () {
    this.setState({
      h1ClassName: !this.state.h1ClassName
    })
  }
  render () {
    let commentBoxClass = this.state.h1ClassName ? 'commentBoxH1' : 'commentBoxH1Alt'
    return (
      <div className="commentBox">
        <h1 className={commentBoxClass}>
          Comments
          <em onClick={this.changeClass}>.</em>
        </h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox
