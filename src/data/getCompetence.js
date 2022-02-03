import axios from "../helper/axios-config";

const getCompetence = async (setProject) => {
  await axios.get("/competence")
  .then((res) => {
      setProject(res.data)
  })
  .catch((err) => {
      console.log(err)
  });
};

export default getCompetence;