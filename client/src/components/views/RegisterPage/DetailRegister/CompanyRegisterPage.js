import React, { useState } from "react";
import "./DetailPage.css";
import styled from "styled-components";
import Axios from "axios";

import { Form, Input } from "antd";
import CheckBox2 from "../Sections/CheckBox2";
import { fields } from "../Sections/Fields";
import FileUpload from "../../../utils/FileUpload";
import SelectOne from "../../../utils/SelectOne";
import { AddressMainCategory } from "../../../Data/AddressData1";

const { TextArea } = Input;

//스타일
const CompanyDetails = styled.div`
  padding-top: 100px;
`;

const CompanyInfo = styled.div`
  width: 60%;
  margin: 20px auto;
`;

const CompanyInfoH1 = styled.h1`
  text-align: left;
  margin-bottom: 20px;
`;

const CompanyDetailsForm = styled(Form)`
  width: 100%;
  padding: 30px;
  background-color: white;
  box-shadow: 0 0 0 1.5px rgba(165, 167, 173, 0.25);
`;

const Section = styled.section`
  padding-top: 0px;
  margin-bottom: 30px;
`;

const CompanyIntro = styled.div`
  width: 100%;
`;

const CompanyAddress = styled.section`
  display: inline-block;
  width: 50%;
  margin-bottom: 0px;
`;

const CompanyAddress1 = styled.div`
  display: inline-block;
  width: 47%;
  margin-right: 12px;
`;

const CompanyAddress2 = styled.div`
  display: inline-block;
  width: 45%;
`;

const PortfolioForm = styled(Form.Item)`
  margin-bottom: 0px;
`;

const PortfolioInput = styled(Input)`
  margin-bottom: 10px;
`;

const SectionH3 = styled.h3``;

function PersonRegisterPage(props) {
  //useState
  const [CompanyName, setCompanyName] = useState("");
  const [Introduce, setIntroduce] = useState("");
  const [Site, setSite] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [Filters, setFilters] = useState([]);
  const [Filmography, setFilmography] = useState("");
  const [Portfolio1, setPortfolio1] = useState("");
  const [Portfolio2, setPortfolio2] = useState("");
  const [Portfolio3, setPortfolio3] = useState("");

  //onChange
  const onCompanyNameHandler = (event) => {
    setCompanyName(event.currentTarget.value);
  };

  const onIntroduceHandler = (event) => {
    let text = event.currentTarget.value;
    // --텍스트 저장할 때 줄바꿈 저장하려면 이거 필요한지 테스트 해야함--
    // console.log(text);
    // text = text.replaceAll("\n", "!!");
    // ---------------------------------------------------
    setIntroduce(text);
  };

  const onFilmographyHandler = (event) => {
    setFilmography(event.currentTarget.value);
  };

  const onPortfolioHandler1 = (event) => {
    setPortfolio1(event.currentTarget.value);
  };

  const onPortfolioHandler2 = (event) => {
    setPortfolio2(event.currentTarget.value);
  };

  const onPortfolioHandler3 = (event) => {
    setPortfolio3(event.currentTarget.value);
  };

  const onSiteHandler = (event) => {
    setSite(event.currentTarget.value);
  };

  const handleFilters = (filters, fields) => {
    const newFilters = { ...Filters };
    newFilters[fields] = filters;
    setFilters(newFilters.fields);
    // console.log(newFilters.fields);
  };

  const handleAddress1 = (filters) => {
    setAddress1(filters);
  };

  const handleAddress2 = (filters) => {
    setAddress2(filters);
  };

  // const onFinish = values => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log("Failed:", errorInfo);
  // };

  ///////////////////////////// 서버에 값 넘기기 //////////////////////////////////////
  const onSubmitHandler = () => {
    // event.preventDefault();

    let body = {
      Individual: 2, //individual이 1이면 개인회원, 2이면 기업회원, 0이면 아무것도 하지 않은 회원
      fields: Filters,
      companyName: CompanyName,
      introduce: Introduce,
      address1: Address1,
      address2: Address2,
      site: Site,
      filmography: Filmography,
      portfolio1: Portfolio1,
      portfolio2: Portfolio2,
      portfolio3: Portfolio3,
    };

    if (body.fields.length === 0) {
      alert("회사 분야를 선택해주세요");
    } else {
      console.log(body);
      //회원가입 서버 연동
      Axios.post("/api/users/compRegister", body).then((response) => {
        if (response.data.success) {
          props.history.push("/login");
        } else {
          alert("Error");
        }
      });
    }
  };
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <CompanyDetails>
      <CompanyInfo>
        <CompanyInfoH1>기업회원 프로필 정보</CompanyInfoH1>
        <CompanyDetailsForm
          onFinish={onSubmitHandler}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Section className="profile_info_picture">
            <SectionH3>사진 업로드</SectionH3>
            <FileUpload />
          </Section>

          <Section className="profile_info_name_intro">
            <div id="profile_info_name">
              <SectionH3>회사이름</SectionH3>
              <Form.Item
                name="company_name"
                rules={[
                  { required: true, message: "회사명 입력은 필수입니다." },
                ]}
              >
                <Input
                  placeholder="회사명"
                  value={CompanyName}
                  onChange={onCompanyNameHandler}
                />
              </Form.Item>
            </div>

            <CompanyIntro>
              <SectionH3>회사소개</SectionH3>
              <Form.Item
                name="company_introduction"
                rules={[
                  { required: true, message: "회사소개 입력은 필수입니다." },
                ]}
              >
                <TextArea
                  autoSize={{ minRows: 6, maxRows: 6 }}
                  placeholder="기업에 대한 소개를 작성해주세요"
                  value={Introduce}
                  onChange={onIntroduceHandler}
                />
              </Form.Item>
            </CompanyIntro>
          </Section>

          <CompanyAddress>
            <CompanyAddress1>
              <SectionH3>주소 </SectionH3>
              <SelectOne
                itemName="company_address1"
                list={AddressMainCategory}
                handleAddress={(filters) => handleAddress1(filters)}
              />
            </CompanyAddress1>

            <CompanyAddress2>
              <SelectOne
                itemName="company_address2"
                list={AddressMainCategory}
                handleAddress={(filters) => handleAddress2(filters)}
              />
            </CompanyAddress2>
          </CompanyAddress>

          <CompanyAddress>
            <SectionH3>사이트</SectionH3>
            <Form.Item
              name="company_sns"
              rules={[
                { required: true, message: "홈페이지 주소 입력은 필수입니다." },
                { type: "url", message: "링크를 입력해주세요" },
              ]}
            >
              <Input
                placeholder="홈피이지 링크"
                style={{ borderRadius: 0 }}
                value={Site}
                onChange={onSiteHandler}
              />
            </Form.Item>
          </CompanyAddress>

          <Section style={{ marginTop: "20px" }}>
            <SectionH3>회사 분야 </SectionH3>
            <CheckBox2
              list={fields}
              handleFilters={(filters) => handleFilters(filters, "fields")}
            ></CheckBox2>
          </Section>

          <Section>
            <SectionH3>필모그래피</SectionH3>
            <Form.Item
              name="company_filmography"
              rules={[
                { required: true, message: "필모그래피 입력은 필수입니다." },
              ]}
            >
              <TextArea
                autoSize={{ minRows: 6, maxRows: 6 }}
                placeholder="자유롭게 입력해주세요"
                value={Filmography}
                onChange={onFilmographyHandler}
              />
            </Form.Item>
          </Section>
          <br />

          <Section>
            <SectionH3>포트폴리오 파일 업로드</SectionH3>
            <PortfolioForm
              name="company_portfolio"
              rules={[
                { required: true, message: "포트폴리오 입력은 필수입니다." },
                { type: "url", message: "링크를 입력해주세요" },
              ]}
            >
              <PortfolioInput
                placeholder="저용량 영상 또는 유투브, 비메오 링크 첨부 (http://www....)"
                value={Portfolio1}
                onChange={onPortfolioHandler1}
              />
            </PortfolioForm>
            <PortfolioInput
              placeholder="저용량 영상 또는 유투브, 비메오 링크 첨부 (http://www....)"
              value={Portfolio2}
              onChange={onPortfolioHandler2}
            />
            <PortfolioInput
              placeholder="저용량 영상 또는 유투브, 비메오 링크 첨부 (http://www....)"
              value={Portfolio3}
              onChange={onPortfolioHandler3}
            />
          </Section>
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
        </CompanyDetailsForm>
      </CompanyInfo>
    </CompanyDetails>
  );
}

export default PersonRegisterPage;
