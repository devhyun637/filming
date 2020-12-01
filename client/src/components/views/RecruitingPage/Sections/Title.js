import React from "react";
import styled from "styled-components";

import Image from "../../Sections/Header/img.png";

const RecuritTitleSection = styled.article`
  background-color: white;
  margin: 0.3rem;
  padding: 1rem 1.5rem;
  display: flex;
`;

const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
`;

const RecuritTitleInfo = styled.div`
  margin-left: 1rem;
  width: 100%;
`;

const RecuritTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
`;

const RecuritWrittenInfo = styled.div`
  font-size: 0.8rem;
`;

const RecuritWirter = styled.p`
  margin: 0;
  display: inline-block;
  margin-right: 3rem;
`;

const RecuritWirteDate = styled.p`
  margin: 0;
  display: inline-block;
`;

function Title(props) {
  return (
    <RecuritTitleSection>
      <ProfileImage className="profile-img" />

      <RecuritTitleInfo className="title-info">
        <RecuritTitle className="title">
          단편영화 "시월의 아침" 배우 모집합니다!!!!
        </RecuritTitle>
        <RecuritWrittenInfo className="write-info">
          <RecuritWirter>작성자: 김필름</RecuritWirter>
          <RecuritWirteDate>게시날짜 : 0000 - 00 - 00 </RecuritWirteDate>
        </RecuritWrittenInfo>
      </RecuritTitleInfo>
    </RecuritTitleSection>
  );
}

export default Title;
