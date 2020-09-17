import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login/Login";

import "./App.scss";
import { SignUp } from "./containers/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
      </Switch>
    </Router>
  );
};

export default App;
