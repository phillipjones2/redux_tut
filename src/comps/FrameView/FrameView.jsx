import React, { Component } from 'react'
import '../../styles/reset.styl'
import './FrameView.styl'

import Nav from '../Nav/Nav.jsx'

export default class FrameView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const style = {color: this.props.color}
    return (
      <div className="frameView">
        <Nav />
        {this.props.children}
      </div>
      )
  }
}
