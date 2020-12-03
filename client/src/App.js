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
import HomePage from './containers/HomePage'

import logOut from './actions/businesses/logOut'
import JWTLogIn from './actions/businesses/JWTLogIn'


class App extends React.PureComponent {
  
  componentDidMount() {
    if (localStorage.jwt) {
      this.props.JWTLogIn(localStorage.jwt)
    }
  }
  
  handleLogOut = () => {
    delete localStorage.jwt
    this.props.logOut()
  }

  isLoggedIn = () => {
    return !!this.props.business.id
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation logOut={this.handleLogOut} ></Navigation>
          <Container id="top-container" >
            <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route path="/login">
                {this.isLoggedIn() ? <Redirect to="/visits" /> : <LogInPage />}
              </Route>
              <Route path="/signup">
                {this.isLoggedIn() ? <Redirect to="/visits" /> : <SignUpPage />}
              </Route>
              <Route path="/visits">
                {this.isLoggedIn() ? <VisitsPage /> : <Redirect to="/login" /> }
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

export default connect(mapStateToProps, {logOut, JWTLogIn})(App);
