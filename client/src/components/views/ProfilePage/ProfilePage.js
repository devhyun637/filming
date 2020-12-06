import React, { useEffect, useState } from "react";
import axios from "axios";

import Article from "./Sections/Article";
import ImageSlide from "./Sections/ImageSlider";

import {
  faHeart,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope as farEnvelope,
  faHeart as farHeart,
  faBookmark as farBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import "./ProfilePage.css";

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
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const PersonaInfo = styled.article`
  margin: 0.3rem;
  margin-left: 2rem;
  background-color: white;
`;

const UserName = styled.h1`
  margin-top: 2rem;
`;

const UserInfoList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserInfoListLi = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

const Link = styled.a`
  color: #353535;

  &:hover {
    color: #609ae9;
  }
`;

const Count = styled.span`
  margin-left: 5px;
  color: #565656;
  font-size: 0.8rem;
`;

// 샘플 이미지
const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];

function ProfilePage(props) {
  //userId 가져오기 (쿠키?)
  // const userId = {};

  const [introduce, setIntroduce] = useState("");
  const [userName, setUserName] = useState("이름없음");
  const [address, setAddress] = useState("");
  // const [body, setBody] = useState([]);
  // const [interest, setInterest] = useState([]);
  const [biography, setBiography] = useState("");
  const [filmography, setFilmography] = useState("");
  const [profile, setProfile] = useState(images);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  // const [portfolio, setPortfolio] = useState("");

  //////////////////////////////////회원 정보 가져오기////////////////////////////////
  useEffect(() => {
    //오른쪽 프롶필 정보 가져오기
    axios.get("/api/users/userInfo").then((response) => {
      console.log(response);
      setUserName(response.data.userInfo.name);
      setAddress(response.data.userInfo.address);
      setBiography(response.data.userInfo.UserInfo.biography);
      setFilmography(response.data.userInfo.UserInfo.filmography);
      setIntroduce(response.data.userInfo.UserInfo.introduce);
      setHeight(response.data.userInfo.UserInfo.height);
      setWeight(response.data.userInfo.UserInfo.weight);
    });
  }, []);
  //////////////////////////////////회원 정보 가져오기////////////////////////////////

  const exampleText = `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College`;

  return (
    <Main>
      <UserSection>
        <PersonaInfo>
          <ImageSlide slide={profile} />
          <UserName>{userName}</UserName>
          <div>
            <UserInfoList>
              <UserInfoListLi>
                <Link href="#">
                  <FontAwesomeIcon icon={faHeart} color="red" size="lg" />
                </Link>
                <Count>11</Count>
              </UserInfoListLi>

              {/* <UserInfoListLi>
                <Link href="#">
                  <FontAwesomeIcon icon={farEnvelope} size="lg" />
                </Link>
                <Count>11</Count>
              </UserInfoListLi>

              <UserInfoListLi>
                <Link href="#">
                  <FontAwesomeIcon icon={farBookmark} size="lg" />
                </Link>
                <Count>11</Count>
              </UserInfoListLi> */}
            </UserInfoList>
          </div>
        </PersonaInfo>
      </UserSection>

      <ProfileSectioon>
        <Article name={"자기소개"} desc={introduce} />
        <Article name={"주소"} desc={address} />
        <Article
          name={"신체사이즈"}
          desc={`height: ${height}cm, weight: ${weight}kg`}
        />
        <Article name={"관심 분야"} desc={exampleText} />
        <Article name={"바이오그래피"} desc={biography} />
        <Article name={"필모그래피"} desc={filmography} />
        <Article name={"첨부된 프로필"} desc={exampleText} />
        <Article name={"포트폴리오"} desc={exampleText} />
      </ProfileSectioon>
      {/* <button>수정하기</button> */}
    </Main>
  );
}

export default ProfilePage;
