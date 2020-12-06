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
import RecuritingPage from "./components/views/RecruitingPage/RecuritingPage";

import ProfilePage from "./components/views/ProfilePage/ProfilePage";
import Auth from "./Auth/Auth";

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* 로그인 유뭉에 따른 회원 접근 권한 주기 */}
        <Switch>
          <Route
            exact
            path="/job-board"
            component={Auth(DetailRegisterPage, null)}
          />
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
          <Route exact path="/job-recurit/:id" component={RecuritingPage} />
          <Route
            exact
            path="/job-recurit/:id"
            component={Auth(RecuritingPage, true)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;