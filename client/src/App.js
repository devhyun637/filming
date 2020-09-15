import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import HomePage from "./components/views/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;