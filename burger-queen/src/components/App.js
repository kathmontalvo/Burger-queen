import React from 'react';
import '../css/App.css';
import Routes from './Router'

const App = () => {
  return (
      <div className="container-fluid d-flex col-12 fill-available body-color align-items-center column">
        <Routes />
      </div>
  )
}

export default App;