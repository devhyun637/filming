import React from "react";
import styled from "styled-components";

const Article = styled.article`
  border: 1px solid black;
  margin: 0.3rem;
  padding: 1.5rem;s
`;

function Profile() {
  return (
    <Article>
      <figure>
        <img></img>
      </figure>
      <h1 style={{ textAlign: "left" }}>이름</h1>
      <div>profile</div>
      <div>
        <ul>
          <li>좋아요</li>
          <li>메일</li>
          <li>찜</li>
        </ul>
      </div>
    </Article>
  );
}

export default Profile;
