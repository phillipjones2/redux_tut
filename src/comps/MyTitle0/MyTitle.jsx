import React, { Component } from 'react'
import style from './MyTitle.styl'

export default class MyTitle extends Component {
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
      )
  }
}
MyTitle.propTypes = {
  title: React.Protypes.string,
  color: React.Protypes.string
}
