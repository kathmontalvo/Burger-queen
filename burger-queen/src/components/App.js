import React, { Component } from 'react';
import '../css/App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Link to="/Login"> Login </Link>
          <Route exact path="/Login" component={Login} />
        </div>
      </Router >
    )
  }
}

export default App;
