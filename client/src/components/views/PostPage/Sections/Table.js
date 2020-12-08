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
            <RecuritTableText>{props.companyName}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>작품 제목</RecuritTableIndex>
            <RecuritTableText>{props.filmName}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>홈페이지 주소</RecuritTableIndex>
            <RecuritTableText>{props.companyAddress}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>이메일</RecuritTableIndex>
            <RecuritTableText>{props.userAddress}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>모집분야</RecuritTableIndex>
            <RecuritTableText>{props.field}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>참여기간(회차수)</RecuritTableIndex>
            <RecuritTableText>{props.period}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>페이</RecuritTableIndex>
            <RecuritTableText>{props.pay}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>담당자</RecuritTableIndex>
            <RecuritTableText>{props.manager}</RecuritTableText>
          </tr>
          <tr>
            <RecuritTableIndex>마감기한</RecuritTableIndex>
            <RecuritTableText>{props.deadline}</RecuritTableText>
          </tr>
        </RecuritTableBody>
      </RecuritInfoTable>
    </RecuritTable>
  );
}

export default Table;
