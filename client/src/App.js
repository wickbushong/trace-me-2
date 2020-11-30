import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container'

import Navigation from './navigation/Navigation'
import LogInPage from './containers/LogInPage'
import SignUpPage from './containers/SignUpPage'
import VisitsPage from './containers/VisitsPage'
import ReportPage from './containers/ReportPage'

import logOut from './actions/businesses/logOut'


class App extends React.PureComponent {
  
  handleLogOut = () => {
    delete localStorage.jwt
    this.props.logOut()
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation logOut={this.handleLogOut} ></Navigation>
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
              <Route path="/visits">
                <VisitsPage />
              </Route>
              <Route path="/report">
                <ReportPage />
              </Route>
              <Route path="/logout"> 
                <Redirect to="/login" />
              </Route>
              <Route path="/">
                <Redirect to="/login" />
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

export default connect(mapStateToProps, {logOut})(App);
