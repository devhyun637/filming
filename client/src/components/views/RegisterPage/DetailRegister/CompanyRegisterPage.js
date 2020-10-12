import React, { useState } from "react";
import "./DetailPage.css";

import { Form, Input, Select } from "antd";
import CheckBox2 from "../Sections/CheckBox2";
import { fields } from "../Sections/Fields";

const { Option } = Select;
const { TextArea } = Input;

function PersonRegisterPage(props) {
  const [EnglishName, setEnglishName] = useState("");
  const [Introduce, setIntroduce] = useState("");
  const [SNS, setSNS] = useState("");
  const [Filters, setFilters] = useState([]);
  const [Filmography, setFilmography] = useState("");
  const [Portfolio, setPortfolio] = useState("");

  //onChange---------------------------------------------------------------
  const onEnglishNameHandler = event => {
    setEnglishName(event.currentTarget.value);
  };

  const onIntroduceHandler = event => {
    setIntroduce(event.currentTarget.value);
  };

  const onFilmographyHandler = event => {
    setFilmography(event.currentTarget.value);
  };

  const onPortfolioHandler = event => {
    setPortfolio(event.currentTarget.value);
  };

  const onSNSHandler = event => {
    setSNS(event.currentTarget.value);
  };

  //----------------------------------------------------------------------------

  const handleFilters = (filters, fields) => {
    const newFilters = { ...Filters };
    newFilters[fields] = filters;
    setFilters(newFilters);
  };

  // const onFinish = values => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log("Failed:", errorInfo);
  // };

  const onSubmitHandler = event => {
    console.log("click");
    // event.preventDefault();

    let body = {
      Individual: 2 //individual이 1이면 개인회원, 2이면 기업회원, 0이면 아무것도 하지 않은 회원
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

  return (
    <div id="person_detail">
      <div id="person_profile_info">
        <h1>개인회원 프로필 정보</h1>
        <Form
          id="profile_info"
          // onSubmit={onSubmitHandler}
          onFinish={onSubmitHandler}
          // onFinishFailed={onFinishFailed}
        >
          <section className="profile_info_picture">
            <h3>사진 업로드</h3>
          </section>

          <section className="profile_info_name_intro">
            <div id="profile_info_name">
              <h3>이름</h3>
              <Form.Item
                name="user_english_name"
                rules={[
                  { required: true, message: "영문 이름 입력은 필수입니다." },
                  {
                    pattern: /^[a-zA-Z\s]+$/,
                    message: "영어만 입력할 수 있습니다."
                  },
                  {
                    min: 3,
                    message: "최소 3글자 이상 입력해야합니다."
                  }
                ]}
              >
                <Input
                  placeholder="영문 이름을 입력해주세요"
                  value={EnglishName}
                  onChange={onEnglishNameHandler}
                />
              </Form.Item>
            </div>

            <div id="profile_info_intro">
              <h3>자기소개</h3>
              <Form.Item
                name="user_introduction"
                rules={[
                  { required: true, message: "자기소개 입력은 필수입니다." }
                ]}
              >
                <TextArea
                  id="profile_info_intro"
                  autoSize={{ minRows: 6, maxRows: 6 }}
                  placeholder="자기소개를 입력해주세요"
                  value={Introduce}
                  onChange={onIntroduceHandler}
                />
              </Form.Item>
            </div>
          </section>

          <section className="profile_info_personal_information">
            <div id="user_introduction_body">
              <div className="user_introduction_height">
                <h3>주소 </h3>
                <Form.Item
                  name="user_introduction_height"
                  rules={[
                    { required: true, message: "주소 입력은 필수입니다." }
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    // onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="user_introduction_weight">
                <Form.Item
                  name="user_introduction_height"
                  rules={[
                    { required: true, message: "주소 입력은 필수입니다." }
                  ]}
                >
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    // onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
          </section>

          <section className="profile_info_personal_information">
            <h3>사이트</h3>
            <Form.Item
              name="user_info_sns"
              rules={[
                { required: true, message: "SNS 주소 입력은 필수입니다." },
                { type: "url", message: "링크를 입력해주세요" }
              ]}
            >
              <Input
                id="user_info_sns"
                placeholder="SNS 주소"
                style={{ borderRadius: 0 }}
                value={SNS}
                onChange={onSNSHandler}
              />
            </Form.Item>
          </section>

          <section
            className="profile_info_interests"
            style={{ marginTop: "20px" }}
          >
            <h3>회사 분야 </h3>
            <CheckBox2
              list={fields}
              handleFilters={filters => handleFilters(filters, "fields")}
            ></CheckBox2>
          </section>

          <section className="profile_info_filmography">
            <h3>필모그래피</h3>
            <Form.Item
              name="user_introduction_filmography"
              rules={[
                { required: true, message: "필모그래피 입력은 필수입니다." }
              ]}
            >
              <TextArea
                id="profile_info_filmography"
                autoSize={{ minRows: 6, maxRows: 6 }}
                placeholder="자유롭게 입력해주세요"
                value={Filmography}
                onChange={onFilmographyHandler}
              />
            </Form.Item>
          </section>
          <br />

          <section className="profile_info_upload">
            <h3>포트폴리오 파일 업로드</h3>
            <Form.Item
              name="user_introduction_portfolio"
              rules={[
                { required: true, message: "포트폴리오 입력은 필수입니다." },
                { type: "url", message: "링크를 입력해주세요" }
              ]}
            >
              <Input
                id="user_info_portfolio"
                placeholder="저용량 영상 또는 유투브, 비메오 링크 첨부 (http://www....)"
                value={Portfolio}
                onChange={onPortfolioHandler}
              />
            </Form.Item>
          </section>
          <br />

          <div className="user_info_register_button">
            <button id="temporary_storage_button" disabled>
              임시저장
            </button>
            <button
              type="submit"
              id="storage_button"
              onSubmit={onSubmitHandler}
            >
              작성완료
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PersonRegisterPage;
