import React from "react";
import styled from "styled-components";

const Article = styled.article`
  border: 1px solid black;
  margin: 0.3rem;
  padding: 1.5rem;s
`;

function Comment() {
  return (
    <Article>
      <h3>코멘트</h3>
      {/* 테이블 필요 */}
    </Article>
  );
}

export default Comment;
