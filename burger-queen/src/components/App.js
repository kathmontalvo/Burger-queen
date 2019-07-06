import React, { Component } from 'react';
import '../css/App.css';
import Routes from './Router'

class App extends Component {
  render() {
    return (
      <>
      <div className="container-fluid d-flex justify-content-center align-items-center column fill-available">
      <Routes />
      </div>
      </>
    )
  }
}

export default App;
