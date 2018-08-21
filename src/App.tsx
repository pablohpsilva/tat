import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
// import './config/firebase.config'

import Home from './screens/Home'
import Login from './screens/Login'
import SComp from './screens/SamplesComponents'

class App extends React.Component {
  public render() {
    return (
      <div
        className="App">
        <Switch>
          <Route
            path="/login"
            component={Login} />
          <Route
            path="/extra"
            component={SComp} />
          <Route
            path="/"
            component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
