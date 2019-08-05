import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Orders from './Products'
import Home from './Home'
import Login from './Login'
import cocina from './Cocina/index'
import ProtectedRoute from '../controller/routes/protected-route'
import { HashRouter } from 'react-router-dom'

const Routes = () => {
  return (
    // <Router>
    <HashRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Login} />
        <ProtectedRoute exact path={process.env.PUBLIC_URL + '/orders'} component={Orders} />
        <ProtectedRoute exact path='/home' component={Home} />
        <ProtectedRoute exact path='/cocina' component={cocina} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </ HashRouter>

    // </Router >x
  )
}

export default Routes;