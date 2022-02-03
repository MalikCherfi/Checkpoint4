import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getOneProject from "../data/getOneProject";
import styled from "styled-components";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getOneProject(setProject, id);
  }, []);

  return (
    <>
      {project && (
        <DivContainer>
          <Image>
            <img src={project.image.principal} />
            {project.image.secondary.map((e) => (
              <img src={e} />
            ))}
          </Image>
          <Description>
            <Detail>
              <h1 id="name">{project.name}</h1>
              <h2>{project.year}</h2>
              <DivP>
                <p>{project.details}</p>
              </DivP>
            </Detail>
            <LinkButton>
              <a href={project.link} target="_blank">
                <Button type="button">Visiter</Button>
              </a>
            </LinkButton>
          </Description>{" "}
        </DivContainer>
      )}
    </>
  );
}

export default Project;

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const Image = styled.div`
  margin-top: 15%;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 350px;
    height: auto;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 1px 1px 20px black;
  }
`;

const Description = styled.div`
  margin-top: 15%;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Detail = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rancho&family=Roboto&display=swap");

  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  #name {
    font-family: "Rancho", cursive;
    font-size: 30px;
  }

  p {
    text-align: center;
  }
`;

const LinkButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20rem;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #094b65;
  border-radius: 30px;
  color: white;
`;

const DivP = styled.div`
width: 70%;
`
