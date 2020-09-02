import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Test from "./containers/Test";

const App = () => {
  return (
    <Router>
      <Link to="/" component={Test} />
    </Router>
  );
};

export default App;
