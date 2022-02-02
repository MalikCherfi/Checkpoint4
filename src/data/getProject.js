import React from "react";
import axios from "../helper/axios-config";

const getProject = async (setProject) => {
  await axios.get("/project")
  .then((res) => {
      setProject(res.data)
  })
  .catch((err) => {
      console.log(err)
  });
};

export default getProject;
