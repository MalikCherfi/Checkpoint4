import React from "react";
import { useForm } from "react-hook-form";

import postProject from "../data/postProject";

const AddProjectForm = () => {
  const { register, handleSubmit } = useForm();

  const imgData = new FormData();

  const postData = (data) => {
      console.log(data)
    const principalImg = data.image.principal[0];
    const secondaryImg = data.image.secondary;

    console.log(principalImg)
    console.log(secondaryImg)

    imgData.append("image.principal", principalImg);
    for (let i = 0; i < secondaryImg.length; i += 1) {
      imgData.append("image.secondary", secondaryImg[i]);
    }

    postProject(data, imgData);
  };

  return (
  
      <form onSubmit={handleSubmit(postData)} encType="multipart/form-data">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nom du projet"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <input
            type="text"
            name="year"
            placeholder="anné de réalisation"
            {...register("year", { required: true })}
          />
        </div>
        <div>
          <input
            type="text"
            name="details"
            placeholder="detail du projet"
            {...register("details", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="image.principal">
            Image principale
            <input
              type="file"
              id="image.principal"
              name="image.principal"
              {...register("image.principal", { required: true })}
            />
          </label>
          <label htmlFor="image.secondary">
            Image(s) secondaire(s)
            <input
              type="file"
              id="image.secondary"
              name="image.secondary"
              multiple
              {...register("image.secondary", { required: true })}
            />
          </label>
        </div>
        <div>
          <input
            type="text"
            name="link"
            placeholder="Lien vers le projet"
            {...register("link", { required: true })}
          />
        </div>
        <input type="submit" value="Envoyer le formulaire" />
      </form>
   
  );
};

export default AddProjectForm;
