import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/views/Sections/Header/Header";

import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import DetailRegisterPage from "./components/views/RegisterPage/DetailRegister/DetailRegisterPage";
import CompanyRegisterPage from "./components/views/RegisterPage/DetailRegister/CompanyRegisterPage";
import PersonRegisterPage from "./components/views/RegisterPage/DetailRegister/PersonRegisterPage";

import HomePage from "./components/views/HomePage/HomePage";
import JobBoardPage from "./components/views/JobBoardPage/JobBoardPage";
import PostPage from "./components/views/PostPage/PostPage";

import ProfilePage from "./components/views/ProfilePage/ProfilePage";
import Auth from "./Auth/Auth";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />

          <Route exact path="/job-board" component={Auth(JobBoardPage, null)} />
          <Route
            exact
            path="/detailRegister"
            component={Auth(DetailRegisterPage, true)}
          />
          <Route
            exact
            path="/compRegister"
            component={Auth(CompanyRegisterPage, true)}
          />
          <Route
            exact
            path="/personRegister"
            component={Auth(PersonRegisterPage, true)}
          />

          <Route exact path="/profile" component={Auth(ProfilePage, true)} />
          <Route
            exact
            path="/job-recurit/:id"
            component={Auth(PostPage, true)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
