import React, { useState } from "react";
import Global from "../styled-components/Global";
import ProjectList from "../components/ProjectList";

function Home({ project }) {
  return (
    <Global>
      <ProjectList project={project} />
    </Global>
  );
}

export default Home;
