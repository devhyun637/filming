import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/views/Sections/Header/Header";

import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import DetailRegisterPage from "./components/views/RegisterPage/DetailRegister/DetailRegisterPage";
import CompanyRegisterPage from "./components/views/RegisterPage/DetailRegister/CompanyRegisterPage";
import PersonRegisterPage from "./components/views/RegisterPage/DetailRegister/PersonRegisterPage";
import HomePage from "./components/views/HomePage/HomePage";

import ProfilePage from "./components/views/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Header />
      <div>
        {/* 로그인 유뭉에 따른 회원 접근 권한 주기 */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={HomePage} />

          <Route exact path="/detailRegister" component={DetailRegisterPage} />
          <Route exact path="/compRegister" component={CompanyRegisterPage} />
          <Route exact path="/personRegister" component={PersonRegisterPage} />

          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
