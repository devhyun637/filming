import React, { useState } from "react";

import { Collapse } from "antd";
import "./RegisterPage.css";

function RegisterPage() {
  // Collapse
  const { Panel } = Collapse;
  const text = `
  체크박스가 들어갈 자리입니다.
`;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [Name, setName] = useState("");
  const [BirthYear, setBirthYear] = useState("");
  const [BirthMonth, setBirthMonth] = useState("");
  const [BirthDay, setBirthDay] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");

  const onEamilHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordComfirmHandler = event => {
    setPasswordConfirm(event.currentTarget.value);
  };

  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };

  const onBirthYearHandler = event => {
    setBirthYear(event.currentTarget.value);
  };

  const onBirthMonthHandler = event => {
    setBirthMonth(event.currentTarget.value);
  };

  const onBirthDayHandler = event => {
    setBirthDay(event.currentTarget.value);
  };

  const onPhoneNumberHandler = event => {
    setPhoneNumber(event.currentTarget.value);
  };

  const onAddressHandler = event => {
    setAddress(event.currentTarget.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    //error 형식으로 수정하기
    if (Password !== PasswordConfirm) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      passwordConfirm: PasswordConfirm,
      name: Name,
      birthYear: BirthYear,
      birthMonth: BirthMonth,
      birthDay: BirthDay,
      phoneNumber: PhoneNumber,
      address: Address
    };

    console.log(body);

    // 회원가입 서버 연동
    // Axios.post("/api/users/register", body).then(response => {
    //   if (response.data.loginSuccess) {
    //     props.history.push("/login");
    //   } else {
    //     alert("Error");
    //   }
    // });
  };

  //validation 하기
  const canSave = () => {
    if (Email || Password) return false;
    else return true;
  };

  return (
    <div id="register_page">
      <form id="register_form" onSubmit={onSubmitHandler}>
        <h1>회원가입</h1>
        <div id="user_id" className="register">
          <label htmlFor="id">아이디(이메일) </label>
          <input
            type="email"
            id="id"
            name=""
            placeholder="이메일 주소"
            value={Email}
            onChange={onEamilHandler}
          />
          <br />
          <button type="submit" disabled>
            인증 메일 전송
          </button>
        </div>

        <div id="user_password" className="register">
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            id="password"
            name=""
            placeholder="비밀번호 (영문, 숫자, 특수문자 8-25자)"
            value={Password}
            onChange={onPasswordHandler}
          />
          <label htmlFor="new_password">비밀번호 확인 </label>
          <input
            type="password"
            id="new_password"
            name=""
            placeholder="비밀번호 확인"
            value={PasswordConfirm}
            onChange={onPasswordComfirmHandler}
          />
        </div>

        <div id="user_name" className="register">
          <label htmlFor="name">이름 </label>
          <input
            type="text"
            id="name"
            name=""
            placeholder="실명을 입력하세요"
            value={Name}
            onChange={onNameHandler}
          />
        </div>

        <div id="user_birth" className="register">
          <label>생년월일 </label>
          <input
            type="text"
            name=""
            placeholder="년(4자)"
            value={BirthYear}
            onChange={onBirthYearHandler}
          />
          <input
            type="text"
            name=""
            placeholder="월"
            value={BirthMonth}
            onChange={onBirthMonthHandler}
          />
          <input
            type="text"
            name=""
            placeholder="일"
            value={BirthDay}
            onChange={onBirthDayHandler}
          />
        </div>

        <div id="user_phone" className="register">
          <label htmlFor="phone_number">휴대폰번호 </label>
          <input
            type="text"
            id="phone_number"
            placeholder="'-'구분없이 입력"
            value={PhoneNumber}
            onChange={onPhoneNumberHandler}
          />
          <button disabled>인증번호</button>
          <br />
          <input
            type="text"
            className="certification"
            placeholder="인증번호 입력"
            value
            onChange
          />
        </div>

        <div id="user_address" className="register">
          <label htmlFor="address">주소 </label>
          <input
            type="text"
            id="address"
            placeholder="주소 입력"
            value={Address}
            onChange={onAddressHandler}
          />
          <button disabled>주소 검색</button>
          <br />
          <input type="text" className="certification" value onChange />
        </div>

        <div id="user_interests" className="register">
          <label id="interests">관심분야 </label>
          <Collapse>
            <Panel header="Group A" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="Group B" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="Group C" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <button type="submit" id="register_button" disabled={canSave()}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
