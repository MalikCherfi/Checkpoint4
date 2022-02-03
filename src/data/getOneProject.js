import axios from "../helper/axios-config";

const getOneProject = (setProject, id) => {
  axios
    .get(`/project/${id}`)
    .then((res) => setProject(res.data))
    .catch((err) => console.log(err));
};

export default getOneProject;
