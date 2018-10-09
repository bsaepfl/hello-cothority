import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ConodeList from './ConodeList'

export default ({ match }) => (
  <Switch>
    <Route path={match.path} component={ConodeList} />
  </Switch>
)
