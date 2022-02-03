import axios from "../helper/axios-config";

const postCompetence = async (data) => {
  await axios
    .post("/competence", data)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

export default postCompetence;
