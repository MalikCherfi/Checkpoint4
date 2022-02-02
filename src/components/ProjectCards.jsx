import React from "react";
import styled from "styled-components";

function ProjectCards({ project, image, year }) {
  return (
    <>
      <DivCard>
        <img src={process.env.REACT_APP_API_URL + image} alt={project}></img>
        <h1>{project}</h1>
        <p>année: {year}</p>
      </DivCard>
    </>
  );
}

export default ProjectCards;

const DivCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: solid;
border-radius: 10px;
width: 350px;

img {
    width: 100%;
    height: auto;
    border-top-radius: 4px;
}



`;