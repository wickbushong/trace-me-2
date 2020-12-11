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
import BusinessSignUpPage from './containers/BusinessSignUpPage'
import UserSignUpPage from './containers/UserSignUpPage'
import VisitsPage from './containers/VisitsPage'
import ReportPage from './containers/ReportPage'
import HomePage from './containers/HomePage'
import Error from './components/Error'

import logOut from './actions/logOut'
import JWTLogIn from './actions/businesses/JWTLogIn'
import resetErrors from './actions/resetErrors'


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

  errorCheck = () => {
     return !!Object.keys(this.props.errors).length
  }

  render() {
    const { errors } = this.props
    return (
      <Router>
        <div>
          <Navigation logOut={this.handleLogOut} ></Navigation>
          <Container id="top-container" >
            { this.errorCheck() ? <Error errors={errors} /> : null }
            <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route path="/logout"> 
                {this.isLoggedIn() ? this.handleLogOut : <Redirect to="/login" />}
              </Route>
              <Route path="/login">
                {this.isLoggedIn() ? <Redirect to="/visits" /> : <LogInPage />}
              </Route>
              <Route path="/signup/business">
                {this.isLoggedIn() ? <Redirect to="/visits" /> : <BusinessSignUpPage />}
              </Route>
              <Route path="/signup/user">
                {this.isLoggedIn() ? <Redirect to="/" /> : <UserSignUpPage />}
              </Route>
              <Route path="/visits">
                {this.isLoggedIn() ? <VisitsPage /> : <Redirect to="/login" /> }
              </Route>
              <Route path="/report">
                <ReportPage />
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
    visits: state.visits,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {logOut, JWTLogIn, resetErrors})(App);
