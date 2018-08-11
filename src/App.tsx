import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Route, Router } from 'react-router';
import './App.css';
import BoardContainer from './components/BoardContainer'

class App extends React.Component {
  public render() {
    return (

      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              component={BoardContainer}
            />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
