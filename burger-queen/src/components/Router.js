import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from './Home'
import Login from './Login'
const Routes = () => {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router >
  )
}

export default Routes