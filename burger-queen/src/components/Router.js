import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import ProtectedRoute from '../controller/routes/protected-route'
const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <ProtectedRoute exact path='/home' component={Home} />
        <Route path = '*' component={()=> '404 NOT FOUND'} />
      </Switch>
    </Router >
  )
}

export default Routes