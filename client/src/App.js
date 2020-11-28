import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navigation from './Navigation'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        
      </div>
    </Router>
    
  );
}

export default App;
