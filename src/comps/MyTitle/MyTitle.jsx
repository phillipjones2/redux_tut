import React, { Component } from 'react'
import style from './MyTitle.styl'

class MyTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fruit: ['apple','grapes']
    }
    this.changeFruit = this.changeFruit.bind(this)
  }
  changeFruit () {
    let newFruit = document.getElementById('fruitInput')
    console.log(React.PropTypes)
    if (newFruit.value !== '') {
      const addFruit = newFruit.value
      newFruit.value = ''
      this.setState(
        () => {
          return this.state.fruit.push(addFruit)
        }
      )
    }
  }
  render () {
    const style = {color: this.props.color}
    return (
      <div className="myTitle">
        <h1 style={style}>
          {this.props.title}
        </h1>
        <input id="fruitInput" placeholder="add fruit"></input>
        <button onClick={this.changeFruit}>add Fruit</button>
        <ul>
          {this.state.fruit.map((a) => { return <li key={a}>{a}</li> })}
        </ul>
        <p>{this.props.happy}</p>
      </div>
      )
  }
}

// MyTitle.propTypes = {
//   title: React.Protypes.string,
//   color: React.Protypes.string,
//   happy: React.PropTypes.string
// }
MyTitle.defaultProps = {
  happy: 'this is a default prop'
}

export default MyTitle
