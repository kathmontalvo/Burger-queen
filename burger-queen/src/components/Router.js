import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Orders from './Products'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from '../controller/routes/protected-route'

const Routes = () => {
  return (
    // <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/orders' component={Orders} />
        <ProtectedRoute exact path='/home' component={Home} />
        <Route path = '*' component={()=> '404 NOT FOUND'} />
      </Switch>
    // </Router >x
  )
}

export default Routes;