import React from "react";
import styled from "styled-components";

const RecuritTable = styled.article`
  background-color: white;
  margin: 0.3rem;
  margin-top: 1rem;
  padding: 1.5rem;
`;

const RecuritInfoTable = styled.table`
  width: 100%;
  color: #565656;
`;

const RecuritTableBody = styled.tbody``;

const RecuritTableIndex = styled.th`
  border: 0.5px solid #ced0da;
  border-left: none;
  width: 20%;
  padding: 10px;
  font-weight: 500;
`;

const RecuritTableText = styled.th`
  border: 0.5px solid #ced0da;
  border-right: none;
  width: 80%;
  padding: 10px;
  font-weight: 500;
`;

function Table(props) {
  return (
    <RecuritTable>
      <RecuritInfoTable>
        <RecuritTableBody>
          <tr>
            <RecuritTableIndex>업체명/성명</RecuritTableIndex>
            <RecuritTableText>필**아카데미</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>작품 제목</RecuritTableIndex>
            <RecuritTableText>시월의 아침</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>홈페이지 주소</RecuritTableIndex>
            <RecuritTableText>Http://*****************</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>이메일</RecuritTableIndex>
            <RecuritTableText>asndkansdlkasn@naver.com</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>모집분야</RecuritTableIndex>
            <RecuritTableText>배우</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>참여기간(회차수)</RecuritTableIndex>
            <RecuritTableText>2021년 1월 (5회차)</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>페이</RecuritTableIndex>
            <RecuritTableText>회차당 **만 원</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>담당자</RecuritTableIndex>
            <RecuritTableText>피일름</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>마감기한</RecuritTableIndex>
            <RecuritTableText>2020-10-12</RecuritTableText>
          </tr>
        </RecuritTableBody>
      </RecuritInfoTable>
    </RecuritTable>
  );
}

export default Table;
