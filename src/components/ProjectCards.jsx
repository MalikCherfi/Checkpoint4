import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProjectCards({ project, image, year, id }) {
  return (
    <>
      <DivCard>
        <Link to={`/project/${id}`}>
          <img src={process.env.REACT_APP_API_URL + image} alt={project}></img>
        </Link>
        <AwesomeHeadline>
          <h1>{project}</h1>
          <h2>{year}</h2>
        </AwesomeHeadline>
      </DivCard>
    </>
  );
}

export default ProjectCards;

const AwesomeHeadline = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rancho&family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@700&display=swap");

  text-align: center;
  font-weight: 400;

  & h1 {
    font-family: "Rancho", cursive;
    color: white;
  }

  & h2 {
    font-family: "Rancho", cursive;
    color: white;
  }
`;

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 400px;

  img {
    width: 100%;
    height: 250px;
    border-radius: 20px;
  }
`;
