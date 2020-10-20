import React from "react";
import styled from "styled-components";
import Logo from "./logo_png.png";

//스타일
const HeaderSection = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
`;

const HeaderLogo = styled.a``;

const LogoImg = styled.img.attrs({
  src: Logo
})`
  width: 10rem;
`;

const HeaderMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  // border: 1px solid blue;
`;

const HeaderMenuList = styled.li`
  // border: 1px solid green;
  font-size: 1rem;
  margin: 0 1em;
  list-style: none;
`;

const HeaderUserMenuList = styled.li`
  // border: 1px solid orange;
  margin: 0 1em;
  list-style: none;
`;

const Link = styled.a`
  color: #353535;

  &:hover {
    color: #609ae9;
  }
`;

function Header() {
  return (
    <HeaderSection>
      <HeaderLogo href="/">
        <LogoImg />
      </HeaderLogo>
      <HeaderMenu>
        <HeaderMenuList>
          <Link href="#"> 구인게시판 </Link>
        </HeaderMenuList>
        <HeaderMenuList>
          <Link href="#"> 프로필 탐색 </Link>
        </HeaderMenuList>
        <HeaderMenuList>
          <Link href="#"> 로케이션 </Link>
        </HeaderMenuList>
      </HeaderMenu>
      <HeaderMenu>
        <HeaderUserMenuList>
          <Link href="/login"> 로그인 </Link>
        </HeaderUserMenuList>
        <HeaderUserMenuList>
          <Link href="/register"> 회원가입 </Link>
        </HeaderUserMenuList>
      </HeaderMenu>
    </HeaderSection>
  );
  // 로그인 했을 때인데 이건 아이콘 받고 구현할거야..
  // return (
  //   <HeaderSection>
  //     <HeaderLogo href="/">
  //       <LogoImg />
  //     </HeaderLogo>
  //     <HeaderMenu>
  //       <HeaderMenuList>
  //         <Link href="#"> 구인게시판 </Link>
  //       </HeaderMenuList>
  //       <HeaderMenuList>
  //         <Link href="#"> 프로필 탐색 </Link>
  //       </HeaderMenuList>
  //       <HeaderMenuList>
  //         <Link href="#"> 로케이션 </Link>
  //       </HeaderMenuList>
  //     </HeaderMenu>
  //     <HeaderMenu>
  //       <HeaderUserMenuList>
  //         <Link href="#"> 로그인함 </Link>
  //       </HeaderUserMenuList>
  //     </HeaderMenu>
  //   </HeaderSection>
  // );
}

export default Header;
