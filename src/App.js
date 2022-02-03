import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import getProject from "./data/getProject";
import getCompetence from "./data/getCompetence";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Project from "./pages/Project";

function App() {
  const [project, setProject] = useState([]);
  const [competence, setCompetence] = useState([]);

  useEffect(() => {
    getProject(setProject);
    getCompetence(setCompetence);
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/project/:id" element={<Project />} />
        <Route
          path="/"
          element={<Home project={project} competence={competence} />}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
