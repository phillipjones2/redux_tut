const React = require('react')
const ReactDOM = require('react-dom')
const People = require('./comps/People/People.jsx')
import { Router,
         IndexRoute,
         Route,
         hashHistory } from 'react-router'

import FrameView from './comps/FrameView/FrameView.jsx'
import Landing from './comps/Landing/Landing.jsx'
import Comments from './comps/Comments/Comments.jsx'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={FrameView} >
      <IndexRoute component={Landing} />
      <Route path='/people' component={People} />
      <Route path='/comments' component={Comments} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
