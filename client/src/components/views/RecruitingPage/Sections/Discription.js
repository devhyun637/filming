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
  const exampleText = `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College`;

  return (
    <RecuritDesc>
      <Desc>{exampleText}</Desc>
    </RecuritDesc>
  );
}

export default Discription;
