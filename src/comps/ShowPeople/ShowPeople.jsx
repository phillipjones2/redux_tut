import React, { Component } from 'react'
import './ShowPeople.styl'

export default class ShowPeople extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='showCard' key={this.props.person.id}>
        <h1>{this.props.person.name}</h1>
        <p>Middle Name: {this.props.person.middleName}</p>
        <p>Age: {this.props.person.age}</p>
        <p>Sex: {this.props.person.sex}</p>
        <img src={'public/window.svg'} />
      </div>
    )
  }
}

ShowPeople.propTypes = {
  person: React.PropTypes.object
}

module.exports = ShowPeople
