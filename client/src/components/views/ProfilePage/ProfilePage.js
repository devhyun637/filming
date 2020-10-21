import React, { useEffect, useState } from "react";
import axios from "axios";

import Profile from "./Sections/Profile";
import Comments from "./Sections/Comment";
import Article from "./Sections/Article";

import styled from "styled-components";

//전체에 적용할 필요 있는 부분 ------------------------------------------
const Main = styled.main`
  margin: 2rem 10rem;
  display: flex;
  flex-direction: row;
`;
//-----------------------------------------------------------------

const UserSection = styled.section`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const ProfileSectioon = styled.section`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function ProfilePage(props) {
  //userId 가져오기 (쿠키?)
  const userId = {};

  const [introduce, setIntroduce] = useState("");
  const [address, setAddress] = useState([]);
  const [body, setBody] = useState([]);
  const [interest, setInterest] = useState([]);
  const [biography, setBiography] = useState("");
  const [filmography, setFilmography] = useState("");
  const [profile, setProfile] = useState([]);
  const [portfolio, setPortfolio] = useState("");

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
      <UserSection>
        <Profile />
        <Comments />
      </UserSection>

      <ProfileSectioon>
        <Article name={"자기소개"} desc={exampleText} />
        <Article name={"주소"} desc={exampleText} />
        <Article name={"신체사이즈"} desc={exampleText} />
        <Article name={"관심 분야"} desc={exampleText} />
        <Article name={"바이오그래피"} desc={exampleText} />
        <Article name={"필모그래피"} desc={exampleText} />
        <Article name={"첨부된 프로필"} desc={exampleText} />
        <Article name={"포트폴리오"} desc={exampleText} />
      </ProfileSectioon>

      {/* <button>수정하기</button> */}
    </Main>
  );
}

export default ProfilePage;
