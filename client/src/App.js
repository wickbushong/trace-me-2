import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {connect} from 'react-redux';


import Navigation from './navigation/Navigation'
import Container from 'react-bootstrap/Container'
import LogInPage from './containers/LogInPage'
import SignUpPage from './containers/SignUpPage'

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <Navigation></Navigation>
          <Container>
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
          </Container>
        </div>
      </Router>
    );
  }

}

const mapStateToProps = state => {
  return {
    business: state.business
  }
}

export default connect(mapStateToProps)(App);
