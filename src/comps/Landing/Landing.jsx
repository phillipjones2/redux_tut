import React, { Component } from 'react'
import './Landing.styl'
import MyTitle from '../MyTitle/MyTitle.jsx'

export default class Landing extends Component {
  render () {
    return (
      <div className='landing'>
        <h1>Hello</h1>
        <MyTitle title="Goodbye" color="peru" />
      </div>
      )
  }
}
