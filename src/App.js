import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
