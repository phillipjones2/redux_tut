const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing.jsx')
import { Router,
         Route,
         hashHistory } from 'react-router'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
