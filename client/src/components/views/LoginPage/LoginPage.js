import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./LoginPage.css";

function LoginPage(props) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일 형식이 올바르지 않습니다.")
          .required("이메일은 필수입력입니다."),
        password: Yup.string()
          .min(8, "비밀번호는 8글자 이상입니다.")
          .required("비밀번호는 필수입력입니다."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // console.log(values);
        ///////////////////////////// 서버로부터 값 가져와서 페이지 넘겨주어야 함 /////////////////////////////////////
        Axios({
          method: "POST",
          url: "http://localhost:5000/api/users/login",
          data: values,
          withCredentials: true,
        })
          .then((response) => {
            setSubmitting(false);
            console.log(response);
            props.history.push("/");
          })
          .catch((error) => {
            setSubmitting(false);
            console.log(error);
          });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      }}
    >
      {(props) => {
        return (
          <div id="login_page">
            <form id="login_form" onSubmit={props.handleSubmit}>
              <h1 id="loginPageSubject">로그인</h1>
              <div id="user_id" className="login">
                <label htmlFor="id">아이디(이메일) </label>
                <Field
                  id="id"
                  type="email"
                  name="email"
                  placeholder="이메일을 입력해주세요"
                />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="email"
                  component="div"
                />
              </div>

              <div id="user_password" className="login">
                <label htmlFor="password">비밀번호 </label>
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.password && props.touched.password
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {props.errors.password && props.touched.password && (
                  <div style={{ color: " #D30000" }}>
                    {props.errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                id="login_button"
                disabled={props.isSubmitting}
                onSubmit={props.handleSubmit}
              >
                로그인
              </button>

              <div id="other_buttons" className="login">
                <Link to="/login">
                  <button type="submit">아이디/비밀번호 찾기</button>
                </Link>
                <Link to="/register">
                  <button type="submit">회원가입</button>
                </Link>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginPage;
