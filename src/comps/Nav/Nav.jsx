import React, { Component } from 'react'
import { Link } from 'react-router'
import './Nav.styl'

export default class Nav extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <nav id='navContainer'>
        <Link to="/"><h1>Phillip Emerson Jones</h1></Link>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Stuff</li>
          <Link to="/people"><li>People</li></Link>
        </ul>

      </nav>
      )
  }
}
