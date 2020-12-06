import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./Header.css";
import { Badge } from "antd";
import {
  MailOutlined,
  MessageOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import Logo from "./logo_png.png";
import Image from "./img.png";

//스타일
const HeaderSection = styled.header`
  width: 100%;
  height: 10vh;
  background-color: white;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  flex-wrap: wrap;
`;

const LogoImg = styled.img.attrs({
  src: Logo,
})`
  width: 10rem;
`;

const HeaderNav = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0 5rem;
`;

const HeaderMenuList = styled.li`
  font-size: 1.1rem;
  margin: 0 1em;
`;

const HeaderUserMenuList = styled.li`
  margin: 0 1.5em;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
`;

const UserName = styled.span`
  margin-left: 0.5rem;
  padding-top: 0.1rem;
  font-size: 1rem;
`;

function Header() {
  //////////////////////////userId 가져오기/////////////////////////////
  const userId = "";
  const [name, setName] = useState("김필름");
  ///////////////////////////////////////////////////////////////////

  const isLogin = () => {
    //login 하기 전
    if (userId === "") {
      return (
        <HeaderNav className="user_nav">
          <HeaderUserMenuList>
            <Link className="link" to="/login">
              로그인
            </Link>
          </HeaderUserMenuList>
          <HeaderUserMenuList>
            <Link className="link" to="/register">
              회원가입
            </Link>
          </HeaderUserMenuList>
        </HeaderNav>
      );
    } else {
      //login 한 후
      return (
        <HeaderNav className="member_nav">
          <HeaderUserMenuList>
            <Link className="link" to="#">
              <Badge count={0} size="small">
                <MailOutlined
                  style={{ fontSize: "1.2rem", color: "#a5a7ad" }}
                />
              </Badge>
            </Link>
          </HeaderUserMenuList>

          <HeaderUserMenuList>
            <Link className="link" to="#">
              <Badge count={0} size="small">
                <MessageOutlined
                  style={{ fontSize: "1.2rem", color: "#a5a7ad" }}
                />
              </Badge>
            </Link>
          </HeaderUserMenuList>

          <HeaderUserMenuList>
            <Link className="link" to="#">
              <Badge count={1} size="small">
                <NotificationOutlined
                  style={{ fontSize: "1.2rem", color: "#a5a7ad" }}
                />
              </Badge>
            </Link>
          </HeaderUserMenuList>

          <HeaderUserMenuList style={{ padding: 0 }}>
            <Link className="link" to="/profile">
              <User>
                <ProfileImage className="profile-img" />
                <UserName>{name}</UserName>
              </User>
            </Link>
          </HeaderUserMenuList>
        </HeaderNav>
      );
    }
  };

  return (
    <HeaderSection id="header">
      <Link className="logo" to="/">
        <LogoImg />
      </Link>

      <HeaderNav className="menu-nav">
        <HeaderMenuList>
          <Link className="link" to="#">
            구인게시판
          </Link>
        </HeaderMenuList>
        <HeaderMenuList>
          <Link className="link" to="#">
            프로필 탐색
          </Link>
        </HeaderMenuList>
        <HeaderMenuList>
          <Link className="link" to="#">
            로케이션
          </Link>
        </HeaderMenuList>
      </HeaderNav>

      {isLogin()}
    </HeaderSection>
  );
}
export default Header;
