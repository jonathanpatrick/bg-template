import * as React from 'react';
// import { Route, Router } from 'react-router';
import './App.css';
import Hand from './components/Hand'

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      // <Router >
      <div className="App">
        {/* <Route path="/"> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Board Game Template</h1>
        </header>
        <p className="App-intro">
          Player Hand.
        </p>
        <Hand resources={["wool", "wheat", "ore", "clay", "clay"]} />
        {/* </Route> */}
      </div>
      // </Router>
    );
  }
}

export default App;
