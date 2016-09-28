import React, { Component } from 'react'
import style from './MyTitle.styl'

class MyTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fruit: 'apple'
    }
    this.changeFruit = this.changeFruit.bind(this)
  }
  changeFruit () {
    this.setState({
      fruit: 'orange'
    })
  }
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
        <p onClick={this.changeFruit}>{this.state.fruit}</p>
        <p>{this.props.happy}</p>
      </div>
      )
  }
}

// MyTitle.propTypes = {
//   // title: React.Protypes.string
//   color: React.Protypes.string,
//   happy: React.PropTypes.string
// }
MyTitle.defaultProps = {
  happy: 'feet'
}

export default MyTitle
