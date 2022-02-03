import styled from "styled-components";
import ProjectList from "./ProjectList";
import CompetenceList from "./CompetenceList";

function Parallax({ project, competence }) {
  const text = document.getElementById("text");
  const bird1 = document.getElementById("bird1");
  const bird2 = document.getElementById("bird2");
  const forest = document.getElementById("forest");
  const rocks = document.getElementById("rocks");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.top = `${50 + value * -0.5}%`;
    bird1.style.top = `${value * -1.5}px`;
    bird1.style.left = `${value * 2}px`;
    bird2.style.top = `${value * -1.5}px`;
    bird2.style.left = `${value * -5}px`;
    rocks.style.top = `${value * -0.12}px`;
    forest.style.top = `${value * 0.25}px`;
  });

  return (
    <>
      <Section>
        <h2 id="text">
          <span>Discover</span>
          <br />
          My Projects
        </h2>
        <img src="../ressources/bird1.png" id="bird1" />
        <img src="../ressources/bird2.png" id="bird2" />
        <img src="../ressources/forest.png" id="forest" />
        <img src="../ressources/rocks.png" id="rocks" />
        <img src="../ressources/water.png" id="water" />
      </Section>
        <div id="projet"></div>

      <Div>
        <ProjectList project={project} />
        <CompetenceList competence={competence} />
      </Div>
    </>
  );
}

export default Parallax;

const Section = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Rancho&family=Roboto&display=swap");

  position: static;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &&::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #094b65, transparent);
    z-index: 10;
  }

  #text {
    position: absolute;
    color: #094b65;
    font-size: 10vw;
    text-align: center;
    line-height: 0.55em;
    font-family: "Rancho", cursive;
  }

  #text span {
    font-size: 0.2em;
    letter-spacing: 2px;
    font-weight: 400;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

const Div = styled.div`
  position: relative;
  padding: 100px;
  background: #094b65;
`;
