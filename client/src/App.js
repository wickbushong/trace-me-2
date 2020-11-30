import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'

import Navigation from './navigation/Navigation'
import LogInPage from './containers/LogInPage'
import SignUpPage from './containers/SignUpPage'
import VisitsPage from './containers/VisitsPage'
import ReportPage from './containers/ReportPage'

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
              <Route path="/log">
                <VisitsPage />
              </Route>
              <Route path="/report">
                <ReportPage />
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
    business: state.business,
    visits: state.visits
  }
}

export default connect(mapStateToProps)(App);
