import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import UpcomingParties from './UpcomingParties'

export default ({ match }) => (
  <Switch>
    <Route path={match.path} component={UpcomingParties} />
  </Switch>
)
