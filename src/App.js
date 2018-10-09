import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Conode from './views/conode'
import Personhood from './views/personhood'
import Skipchain from './views/skipchain'
import 'blulma/blulma.css'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <h1 className='title is-1'>Hello, <span className='has-text-link'>Cothority</span></h1>
          <Switch>
            <Route path='/conode' component={Conode} />
            <Route path='/skipchain' component={Skipchain} />
            <Route path='/personhood' component={Personhood} />
            <Route render={() => (
              <Redirect to='/conode' />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
