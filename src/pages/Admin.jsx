import React from "react";
import AddProjectForm from "../components/AddProjectForm";
import AddCompetenceForm from "../components/AddCompetenceForm";
import styled from "styled-components";


const Admin = ({setProject, setCompetence}) => {
  return (
    <Div>
      <AddProjectForm setProject={setProject} />
      <AddCompetenceForm setCompetence={setCompetence}/>
    </Div>
  );
};

const Div = styled.div`
width: 100%;
margin-top: 20%;
height: 80vh;
display:flex;
justify-content: space-between;

`

export default Admin;

