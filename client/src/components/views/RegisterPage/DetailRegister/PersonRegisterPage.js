import React, { useState } from "react";
import "./DetailPage.css";

import Axios from "axios";

import { Form, Input, Upload, Button, message } from "antd";
import CheckBox from "../Sections/CheckBox1";
import { Interest } from "../Sections/Data1";
import FileUpload from "../../../utils/FileUpload";

const { TextArea } = Input;

function PersonRegisterPage(props) {
  const [EnglishName, setEnglishName] = useState("");
  const [Introduce, setIntroduce] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [SNS, setSNS] = useState("");
  const [Interests, setInterests] = useState([]);
  const [Biography, setBiography] = useState("");
  const [Filmography, setFilmography] = useState("");
  const [ProfileFiles, setProfileFiles] = useState([]);
  const [Portfolio, setPortfolio] = useState("");

  //onChange
  const onEnglishNameHandler = (event) => {
    setEnglishName(event.currentTarget.value);
  };

  const onIntroduceHandler = (event) => {
    setIntroduce(event.currentTarget.value);
  };

  const onHeightHandler = (event) => {
    setHeight(event.currentTarget.value);
  };

  const onWeightHandler = (event) => {
    setWeight(event.currentTarget.value);
  };

  const onBiographyHandler = (event) => {
    setBiography(event.currentTarget.value);
  };

  const onFilmographyHandler = (event) => {
    setFilmography(event.currentTarget.value);
  };

  const onPortfolioHandler = (event) => {
    setPortfolio(event.currentTarget.value);
  };

  const onSNSHandler = (event) => {
    setSNS(event.currentTarget.value);
  };

  const handleFilters = (filters, interests) => {
    const newInterests = { ...Interests };
    newInterests[interests] = filters;

    setInterests(newInterests);
  };

  /////////////////////////////프로필 파일 업로드 관련//////////////////////////////////////////////////////////////////
  const upload = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        if (info.file.status === "done") {
          // console.log(info.file, info.fileList);
          const newProfileFiles = [...ProfileFiles];
          newProfileFiles.push(info);
          setProfileFiles(newProfileFiles);
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    },
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////// 서버에 값 넘기기 /////////////////////////////////////////////////////////////////////////
  const onSubmitHandler = (event) => {
    // event.preventDefault();

    let body = {
      Individual: 1, //individual이 1이면 개인회원, 2이면 기업회원, 0이면 아무것도 하지 않은 회원
      englishName: EnglishName,
      introduce: Introduce,
      height: Height,
      weight: Weight,
      sns: SNS,
      interests: Interests,
      biography: Biography,
      filmography: Filmography,
      profileFiles: ProfileFiles,
      portfolio: Portfolio,
    };

    console.log(body);

    // 회원가입 서버 연동
    Axios.post("/api/users/personRegister", body).then((response) => {
      console.log(response);
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("Error");
      }
    });
  };
  ////////////////////////////////////////////////////////////////

  return (
    <div id="person_detail">
      <div id="person_profile_info">
        <h1>개인회원 프로필 정보</h1>

        <Form id="profile_info" onFinish={onSubmitHandler}>
          {/* ///////////이미지 업로드 및 미리보기 ////////////////// */}
          <section
            className="profile_info_picture"
            style={{ marginBottom: "40px" }}
          >
            <h3>사진 업로드</h3>
            <FileUpload />
          </section>
          {/* //////////////////////////////////////////////// */}

          <section className="profile_info_name_intro">
            <div id="profile_info_name">
              <h3>이름</h3>
              <Input
                style={{ backgroundColor: "#e5e5e5" }}
                disabled
                placeholder="기존 등록한 이름"
              />
              <Form.Item
                name="user_english_name"
                rules={[
                  { required: true, message: "영문 이름 입력은 필수입니다." },
                  {
                    pattern: /^[a-zA-Z\s]+$/,
                    message: "영어만 입력할 수 있습니다.",
                  },
                  {
                    min: 3,
                    message: "최소 3글자 이상 입력해야합니다.",
                  },
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
                  { required: true, message: "자기소개 입력은 필수입니다." },
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
            <div id="user_introduction_birthday">
              <h3>생년월일 </h3>
              <div>
                <input
                  style={{ backgroundColor: "#e5e5e5" }}
                  type="text"
                  placeholder="년(4자)"
                  disabled
                />
                <input
                  style={{ backgroundColor: "#e5e5e5" }}
                  type="text"
                  placeholder="월"
                  disabled
                />
                <input
                  style={{ backgroundColor: "#e5e5e5" }}
                  type="text"
                  placeholder="일"
                  disabled
                />
              </div>
            </div>

            <div id="user_introduction_address">
              <h3>주소 </h3>
              <input
                style={{ backgroundColor: "#e5e5e5" }}
                type="text"
                placeholder="집주소"
                disabled
              />
            </div>

            <div id="user_introduction_body">
              <div className="user_introduction_height">
                <h3>신장 </h3>
                <Form.Item
                  name="user_introduction_height"
                  rules={[
                    { required: true, message: "신장 입력은 필수입니다." },
                    {
                      pattern: /^[0-9]*$/,
                      message: "숫자만 입력",
                    },
                    {
                      max: 3,
                      message: "범위 확인",
                    },
                  ]}
                >
                  <Input
                    id="profile_info_height"
                    placeholder="신장을 입력해주세요"
                    value={Height}
                    onChange={onHeightHandler}
                  />
                </Form.Item>
              </div>

              <div className="user_introduction_weight">
                <h3>몸무게 </h3>
                <Form.Item
                  name="user_introduction_weight"
                  rules={[
                    { required: true, message: "몸무게 입력은 필수입니다." },
                    {
                      pattern: /^[0-9]*$/,
                      message: "숫자만 입력",
                    },
                    {
                      max: 3,
                      message: "범위 확인",
                    },
                  ]}
                >
                  <Input
                    id="profile_info_weight"
                    placeholder="몸무게를 입력해주세요"
                    value={Weight}
                    onChange={onWeightHandler}
                  />
                </Form.Item>
              </div>
            </div>
          </section>

          <section className="profile_info_personal_information">
            <div id="user_introduction_phone">
              <h3>연락처 </h3>
              <input
                style={{ backgroundColor: "#e5e5e5" }}
                type="text"
                placeholder="연락처"
                disabled
              />
            </div>

            <div id="user_introduction_email">
              <h3>이메일 </h3>
              <input
                style={{ backgroundColor: "#e5e5e5" }}
                type="text"
                placeholder="이메일"
                disabled
              />
            </div>

            <div id="user_introduction_sns">
              <h3>SNS 주소</h3>
              <Form.Item
                name="user_info_sns"
                rules={[
                  { required: true, message: "SNS 주소 입력은 필수입니다." },
                  { type: "url", message: "링크를 입력해주세요" },
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
            </div>
          </section>

          <section className="profile_info_interests">
            <div id="user_introduction_interests">
              <h3>관심사항 </h3>
              <CheckBox
                id="interests"
                type="checkbox"
                list={Interest}
                handleFilters={(filters) => handleFilters(filters, "interest")}
              />
            </div>
          </section>

          <section className="profile_info_biography">
            <h3>바이오그래피</h3>
            <Form.Item
              name="user_introduction_biography"
              rules={[
                { required: true, message: "바이오그래피 입력은 필수입니다." },
              ]}
            >
              <TextArea
                id="profile_info_biography"
                autoSize={{ minRows: 6, maxRows: 6 }}
                placeholder="자유롭게 입력해주세요"
                value={Biography}
                onChange={onBiographyHandler}
              />
            </Form.Item>
          </section>

          <section className="profile_info_filmography">
            <h3>필모그래피</h3>
            <Form.Item
              name="user_introduction_filmography"
              rules={[
                { required: true, message: "필모그래피 입력은 필수입니다." },
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
            <div>
              <h3>프로필 파일 업로드</h3>
              <Upload {...upload}>
                <Button>프로필 파일 업로드하기</Button>
              </Upload>
            </div>
            <br />

            <div id="user_info_portfolio">
              <h3>포트폴리오 파일 업로드</h3>
              <Form.Item
                name="user_introduction_portfolio"
                rules={[
                  { required: true, message: "포트폴리오 입력은 필수입니다." },
                  { type: "url", message: "링크를 입력해주세요" },
                ]}
              >
                <Input
                  id="user_info_portfolio"
                  placeholder="저용량 영상 또는 유투브, 비메오 링크 첨부 (http://www....)"
                  value={Portfolio}
                  onChange={onPortfolioHandler}
                />
              </Form.Item>
            </div>
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
