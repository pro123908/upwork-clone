import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login/Login";

import "./App.scss";
import SignUp from "./containers/SignUp/SignUp";
import ScrollToTop from "./components/Misc/ScrollToTop/ScrollToTop";
import Password from "./containers/Password/Password";

import { FirebaseContext } from "./components/Firebase";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route
          path="/"
          component={() => (
            <FirebaseContext.Consumer>
              {(firebase) => {
                return <HomePage firebase={firebase} />;
              }}
            </FirebaseContext.Consumer>
          )}
          exact
        />
        <Route
          path="/login"
          component={() => (
            <FirebaseContext.Consumer>
              {(firebase) => {
                return <Login firebase={firebase} />;
              }}
            </FirebaseContext.Consumer>
          )}
          exact
        />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/password" component={Password} exact />
      </Switch>
    </Router>
  );
};

export default App;
