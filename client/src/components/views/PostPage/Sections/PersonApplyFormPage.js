import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import styled from "styled-components";
import { Input, Form } from "antd";

const { TextArea } = Input;

const RecruitingSection = styled.section`
  width: 60vw;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

const H = styled.h2`
  margin: 0 0.5rem 1rem 0.5rem;
`;

const ApplyForm = styled(Form)`
  width: 100%;
`;

const ApplyArea = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 0 0 1.5px rgba(165, 167, 173, 0.25);
  margin-bottom: 1rem;
`;

const TitleInput = styled(Input)`
  height: 5vh;
`;

const ButtonArea = styled.div`
  text-align: center;
`;

const SubmitBtn = styled.button`
  margin-right: 1rem;
  background-color: #6092cd;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 20vh;
`;

const CancelBtn = styled.button`
  margin-right: 1rem;
  background-color: #a5a7ad;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 20vh;
`;

function PersonApplyFormPage() {
  const [applyTitle, setApplyTitle] = useState("");
  const [applyDesc, setApplyDesc] = useState("");

  const onPersonApplyTitleHandler = (e) => {
    setApplyTitle(e.currentTarget.value);
  };

  const onPersonApplyDescHandler = (e) => {
    setApplyDesc(e.currentTarget.value);
  };

  const onPersonApplySubmitHandler = () => {
    let personApplyData = {
      applyTitle,
      applyDesc,
    };

    console.log(personApplyData);

    // 회원가입 서버 연동
    // Axios.post
  };

  return (
    <RecruitingSection id="recruiting">
      <H>지원신청</H>

      <ApplyForm>
        <ApplyArea className="user-apply-form">
          <Form.Item
            name="user_apply_title"
            rules={[{ required: true, message: "제목 입력은 필수입니다." }]}
          >
            <TitleInput
              placeholder="제목"
              id="user_apply_title"
              onChange={onPersonApplyTitleHandler}
            />
          </Form.Item>

          <Form.Item
            name="user_apply_desc"
            rules={[{ required: true, message: "내용 입력은 필수입니다." }]}
          >
            <TextArea
              id="user_apply_desc"
              autoSize={{ minRows: 10, maxRows: 10 }}
              placeholder="자유롭게 입력해주세요"
              onChange={onPersonApplyDescHandler}
            />
          </Form.Item>
        </ApplyArea>

        <ButtonArea>
          <Link to="/job-board">
            <CancelBtn>취소</CancelBtn>
          </Link>
          <SubmitBtn type="submit" onClick={onPersonApplySubmitHandler}>
            지원하기
          </SubmitBtn>
        </ButtonArea>
      </ApplyForm>
    </RecruitingSection>
  );
}

export default PersonApplyFormPage;
