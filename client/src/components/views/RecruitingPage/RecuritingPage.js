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

const RecuritingInfo = styled.section`
  width: 60vw;
`;

const H1 = styled.h1`
  margin: 0 0.5rem 1rem 0.5rem;
  font-size: 1.5rem;
`;

const RecuritButton = styled.button`
  margin: 3rem auto;
  margin-bottom: 6rem;
  background-color: #6092cd;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 50vh;
`;

function RecuritingPage(props) {
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
      <RecuritingInfo>
        <H1>구인/구직</H1>
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
      </RecuritingInfo>
      <Link to="/">
        <RecuritButton>지원하기</RecuritButton>
      </Link>
    </Main>
  );
}

export default RecuritingPage;
