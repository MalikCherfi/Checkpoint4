import React from "react";
import styled from "styled-components";

function CompetenceCards({ technologie, skills }) {
  return (
    <>
      <Container>
        <h1>{technologie}</h1>
      </Container>
      {/* <P>{skills}</P> */}
    </>
  );
}

export default CompetenceCards;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

  background: black;
  color: white;
  border-radius: 10px;
  width: 120px;
  margin: 10px;

  h1 {
    text-align: center;
    font-size: 25px;
    font-family: 'Dancing Script', cursive;
  }
`;

const P = styled.p`
  color: white;
`;
