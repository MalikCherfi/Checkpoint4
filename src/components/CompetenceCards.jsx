import React from "react";
import styled from "styled-components";

function CompetenceCards({ technologie, skills }) {
  return (
    <Div>
      <Container>
        <p>{technologie}</p>
      </Container>
      {/* <P>{skills}</P> */}
    </Div>
  );
}

export default CompetenceCards;




const Container = styled.div`

  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

  background: black;
  color: white;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;


  p {
    text-align: center;
    font-size: 20px;
    font-family: 'Dancing Script', cursive;
  }
`;

const P = styled.p`
  color: white;
`;

const Div = styled.div`
width:100%;
display:flex;
`
