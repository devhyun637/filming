import React from "react";
import Axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegisterPage.css";

function RegisterPage(props) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        birthYear: "",
        birthMonth: "",
        birthDay: "",
        phoneNumber: "",
        addresses: ""
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("이메일 형식이 올바르지 않습니다.")
          .required("이메일은 필수입력입니다."),
        password: Yup.string()
          .min(8, "비밀번호는 8글자 이상입니다.")
          .required("비밀번호는 필수입력입니다."),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), null], "비밀번호와 일치하지 않습니다.")
          .required("비밀번호 확인은 필수입력입니다."),
        name: Yup.string().required("이름은 필수입력입니다."),
        birthYear: Yup.string()
          .matches(/^[0-9]{4}$/, "태어난 연도의 4자리 숫자를 입력해주세요")
          .required("생년월일은 필수입력입니다."),
        birthMonth: Yup.string()
          .matches(/^[0-9]{2}$/, "태어난 달의 2자리 숫자를 입력해주세요")
          .required("생년월일은 필수입력입니다."),
        birthDay: Yup.string()
          .matches(/^[0-9]{2}$/, "태어난 날짜의 2자리 숫자를 입력해주세요")
          .required("생년월일은 필수입력입니다."),
        phoneNumber: Yup.string()
          .matches(/^[0-9]{11}$/, "핸드폰번호 숫자만 입력해주세요")
          .required("핸드폰번호는 필수입력입니다."),
        addresses: Yup.string().required("주소는 필수입력입니다.")
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        ///////////////////////////// 서버에 값 넘기기 /////////////////////////////////////
        Axios({
          method: "POST",
          url: "/api/users/hello",
          data: values
        })
          .then(response => {
            setSubmitting(false);
            console.log(response);
            props.history.push("/detailRegister");
          })
          .catch(error => {
            setSubmitting(false);
            console.log(error);
          });
        /////////////////////////////////////////////////////////////////////////////////////
      }}
    >
      {props => {
        return (
          <div id="register_page">
            <form id="register_form" onSubmit={props.handleSubmit}>
              <h1>회원가입</h1>
              <div id="user_id" className="register">
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
                <br />
                {/* ///////////////////////////// 여기서 이메일 중복 확인하는거 어떤지///////////////////// */}
                <button type="submit" disabled>
                  인증 메일 전송
                </button>
                {/* /////////////////////////////////////////////////////////////////////////////// */}
              </div>

              <div id="user_password" className="register">
                <label htmlFor="password">비밀번호 </label>
                <input
                  type="password"
                  id="password"
                  placeholder="비밀번호 (영문, 숫자, 특수문자 8-25자)"
                  value={props.password}
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
                <br />
                <label htmlFor="new_password">비밀번호 확인 </label>
                <Field
                  id="new_password"
                  type="password"
                  name="passwordConfirm"
                  placeholder="비밀번호 확인"
                />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="passwordConfirm"
                  component="div"
                />
              </div>

              <div id="user_name" className="register">
                <label htmlFor="name">이름 </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="실명을 입력하세요"
                />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="name"
                  component="div"
                />
              </div>

              <div id="user_birth" className="register">
                <label>생년월일 </label>
                <Field type="text" name="birthYear" placeholder="년(4자)" />
                <Field type="text" name="birthMonth" placeholder="월(2자)" />
                <Field type="text" name="birthDay" placeholder="월(2자)" />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="birthYear"
                  component="div"
                />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="birthMonth"
                  component="div"
                />
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="birthDay"
                  component="div"
                />
              </div>

              <div id="user_phone" className="register">
                <label htmlFor="phone_number">휴대폰번호 </label>
                <Field
                  id="phone_number"
                  type="text"
                  name="phoneNumber"
                  placeholder="핸드폰 번호 입력(-제외 숫자 11자리)"
                />
                <button disabled>인증번호</button>
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="phoneNumber"
                  component="div"
                />
                <input
                  type="text"
                  className="certification"
                  placeholder="인증번호 입력"
                  disabled
                />
              </div>

              <div id="user_address" className="register">
                <label htmlFor="address">주소 </label>
                <Field
                  id="address"
                  type="text"
                  name="addresses"
                  placeholder="주소 입력"
                />
                <button disabled>주소 검색</button>
                <ErrorMessage
                  style={{ color: " #D30000" }}
                  name="addresses"
                  component="div"
                />
                <input type="text" className="certification" disabled />
              </div>

              <button
                type="submit"
                id="register_button"
                disabled={props.isSubmitting}
                onSubmit={props.handleSubmit}
              >
                가입하기
              </button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default RegisterPage;
