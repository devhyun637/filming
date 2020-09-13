import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "./LoginPage.css";

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEamilHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    };

    console.log(body);

    // 이메일 서버 연동
    // Axios.post("/api/users/login", body).then(response => {
    //   if (response.data.loginSuccess) {
    //     props.history.push("/");
    //   } else {
    //     alert("Error");
    //   }
    // });
  };

  // 버튼 비활성화
  // TODO : validation 적용하기
  const canSave = () => {
    if (Email || Password) return false;
    else return true;
  };

  return (
    <div id="login_page">
      <form id="login_form" onSubmit={onSubmitHandler}>
        <h1>로그인</h1>
        <div id="user_id" className="login">
          <label htmlFor="id">아이디(이메일) </label>
          <input
            type="email"
            id="id"
            name=""
            placeholder="이메일을 입력해주세요"
            value={Email}
            onChange={onEamilHandler}
          />
        </div>

        <div id="user_password" className="login">
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            id="password"
            name=""
            placeholder="비밀번호를 입력해주세요"
            value={Password}
            onChange={onPasswordHandler}
          />
        </div>

        <button type="submit" id="login_button" disabled={canSave()}>
          로그인
        </button>

        <div id="other_buttons" className="login">
          <Link to="/login">
            <button type="submit" id="">
              아이디/비밀번호 찾기
            </button>
          </Link>
          <Link to="/register">
            <button type="submit" id="">
              회원가입
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
