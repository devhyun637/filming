import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

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
  //////////////////////////////////회원 정보 가져오기////////////////////////////////
  // useEffect(() => {
  //   //오른쪽 프롶필 정보 가져오기
  //   axios.post("/api/주소입력하기", userId).then(response => {
  //     if (response.data.success) {
  //       setIntroduce();
  //       setAddress();
  //       setBody();
  //       setInterest();
  //       setBiography();
  //       setFilmography();
  //       setProfile();
  //       setPortfolio();
  //     } else {
  //       console.log("정보 가져오기 실패");
  //     }
  //   });
  // }, []);
  //////////////////////////////////회원 정보 가져오기////////////////////////////////

  const exampleText = `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College`;

  return (
    <Main>
      <RecuritingInfo>
        <H1>구인/구직</H1>
        <Title />
        <Table />
        <Discription desc={exampleText} />
      </RecuritingInfo>
      <Link to="/">
        <RecuritButton>지원하기</RecuritButton>
      </Link>
    </Main>
  );
}

export default RecuritingPage;
