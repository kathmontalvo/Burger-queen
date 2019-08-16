import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Orders from './Products'
import Home from './Home'
import Login from './Login'
import Cocina from './Cocina/'
import Admin from './Admin/'
import ProtectedRoute from '../controller/routes/protected-route'
import AdminRoute from '../controller/routes/admin-route'

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/orders' component={Orders} />
        <ProtectedRoute exact path='/home' component={Home} />
        <ProtectedRoute exact path='/cocina' component={Cocina} />
        <AdminRoute exact path='/admin' component={Admin} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
  )
}

export default Routes;