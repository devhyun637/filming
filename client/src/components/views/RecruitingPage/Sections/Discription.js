import React from "react";
import styled from "styled-components";

const RecuritDesc = styled.article`
  background-color: white;
  margin: 0.3rem;
  margin-top: 1rem;
  padding: 1.5rem;
  padding-bottom: 0.5rem;
`;

const Desc = styled.p`
  color: #565656;
`;

function Discription(props) {
  return (
    <RecuritDesc>
      <Desc>{props.desc}</Desc>
    </RecuritDesc>
  );
}

export default Discription;
