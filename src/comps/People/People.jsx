import React, { Component } from 'react'
import data from '../../../public/data.json'
import './People.styl'

export default class People extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='people'>
        <ul>
        {data.people.map((person) => {
          return <li key={person.name}> {person.name} is {person.age} years old. </li>
        })}
        </ul>
      </div>
    )
  }
}

module.exports = People
