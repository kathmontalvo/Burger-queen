import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Index'
import Login from './Login/Index'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router >
  )
}

export default Routes