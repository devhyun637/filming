import React from "react";
import styled from "styled-components";

const ProfileArticle = styled.article`
  // border: 1px solid black;
  background-color: white;
  margin: 0.3rem;
  padding: 1.5rem;
  padding-bottom: 0.5rem;
`;

const Name = styled.h2`
  font-size: 1.3em;
  color: #353535;
`;

const Desc = styled.p`
  font-size: 1em;
  color: #565656;
`;

function Article(props) {
  //text 개행연습
  const text = () =>
    props.desc &&
    props.desc.split("\n").map((value, index) => (
      <React.Fragment key={props.name + index}>
        {value}
        <br />
      </React.Fragment>
    ));

  return (
    <ProfileArticle>
      <Name>{props.name}</Name>
      <Desc>{text()}</Desc>
    </ProfileArticle>
  );
}

export default Article;
