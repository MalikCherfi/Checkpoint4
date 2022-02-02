import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import getProject from "./data/getProject";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

function App() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject(setProject);
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home project={project} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
