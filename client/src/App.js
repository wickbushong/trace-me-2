import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navigation from './Navigation'
import LogInPage from './containers/LogInPage'
import SignUpPage from './containers/SignUpPage'

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
                <h1>THIS IS THE HOMEPAGE. DO SOMETHING ABOUT IT</h1>
            </Route>
            <Route path="/login">
              <LogInPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
