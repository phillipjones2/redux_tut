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
          <Link to="/commentbox"><li>Comments</li></Link>
          <Link to="/people"><li>People</li></Link>
        </ul>
        <img src={'public/window.svg'} />
      </nav>
      )
  }
}
