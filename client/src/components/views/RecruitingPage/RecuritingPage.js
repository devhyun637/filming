import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Title from "./Sections/Title";
import Discription from "./Sections/Discription";
import Table from "./Sections/Table";

const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`;

const RecruitingInfo = styled.section`
  width: 60vw;
`;

const H = styled.h2`
  margin: 0 0.5rem 1rem 0.5rem;
`;

const Button = styled.button`
  margin: 3rem auto;
  background-color: #6092cd;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 50vh;
`;

function RecuritingPage(props) {
  // user의 지원 상태 - 0이면 지원안함, 1이면 지원함
  const userRecruitState = 0;

  // 게시글의 상태 - 0이면 지원마감, 1이면 구직중
  const recruitState = 1;

  const {
    id,
    date,
    title,
    userName,
    companyName,
    filmName,
    companyAddress,
    userAddress,
    field,
    period,
    pay,
    manager,
    deadline,
    discipt,
  } = props.location.state;

  console.log(title);

  return (
    <Main>
      <RecruitingInfo>
        <H>구인/구직</H>
        <Title title={title} userName={userName} date={date} />
        <Table
          companyName={companyName}
          filmName={filmName}
          companyAddress={companyAddress}
          userAddress={userAddress}
          field={field}
          period={period}
          pay={pay}
          manager={manager}
          deadline={deadline}
        />
        <Discription desc={discipt} />
      </RecruitingInfo>

      {recruitState === 0 ? (
        <Link to="/job-board">
          <Button className="go-to-board">목록으로</Button>
        </Link>
      ) : userRecruitState === 0 ? (
        <Link to="/">
          <Button className="recruit">지원하기</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button className="cancle-recruit">지원취소하기</Button>
        </Link>
      )}
    </Main>
  );
}

export default RecuritingPage;
