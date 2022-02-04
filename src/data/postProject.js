import axios from "../helper/axios-config";

const postProject = async (data, imgData) => {
  await axios
    .post("/upload", imgData)
    .then((images) => {
      axios
        .post("/project", {
          ...data,
          year : parseInt(data.year, 10),
          image: {
            principal: `/images/${images.data[0].principal}`,
            secondary: images.data[1].secondary.map(
              (imgName) => `/images/${imgName}`
            ),
          },
        })
        .then((res) => alert("projet ajouté"))
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postProject;
