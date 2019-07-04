import React, {Component} from 'react';
import '../css/App.css';
import LoginComponent from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/Login"> Login </Link>
          <Route exact path="/Login" component={LoginComponent} />
        </div>
      </Router >
    )
  }
}
  
export default App;
