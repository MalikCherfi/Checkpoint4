

import ProjectCards from "./ProjectCards";

const ProjectList = ({project}) => {


  return project.map((pro) => (
    <ProjectCards
      project={pro.name}
      image={pro.image.principal}
      year={pro.year}
    />
  ));
};


export default ProjectList;