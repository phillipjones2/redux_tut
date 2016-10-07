import React, { Component } from 'react'
import data from '../../../public/people.json'
import './People.styl'

import ShowPeople from '../ShowPeople/ShowPeople.jsx'

export default class People extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='people'>
        {data.people.map((p) => (
          <ShowPeople person={p} />
        ))}
      </div>
    )
  }
}

module.exports = People
