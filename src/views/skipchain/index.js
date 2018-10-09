import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import BlockList from './BlockList'

export default ({ match }) => (
  <Switch>
    <Route path={match.path} component={BlockList} />
  </Switch>
)
