import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
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
          <section className='section'>
            <h1 className='title is-1'>Hello, <span className='has-text-primary'>Cothority</span> !</h1>
            <Switch>
              <Route path='/conode' component={Conode} />
              <Route path='/skipchain' component={Skipchain} />
              <Route path='/personhood' component={Personhood} />
              <Route render={() => (
                <Redirect to='/conode' />
              )} />
            </Switch>
            <div className='is-bottom-nav navbar is-fixed-bottom'>
              <Link to='/conode' className='is-bottom-nav-item is-primary'>
                <span className='title is-3' role='img' aria-label='computer'>
                  💻
                </span>
                <br />
                conode
              </Link>
              <Link to='/skipchain' className='is-bottom-nav-item'>
                <span className='title is-3' role='img' aria-label='link'>
                  🔗
                </span>
                <br />
                skipchain
              </Link>
              <Link to='/personhood' className='is-bottom-nav-item'>
                <span className='title is-3' role='img' aria-label='person'>
                  🤓
                </span>
                <br />
                personhood
              </Link>
            </div>
          </section>
        </div>
      </Router>
    )
  }
}

export default App
