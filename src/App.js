import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Link to="/" component={HomePage} />
    </Router>
  );
};

export default App;
