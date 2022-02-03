import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import DivContainer from "../styled-components/Form";

import postProject from "../data/postProject";
import getProject from "../data/getProject";

const AddProjectForm = ({setProject}) => {
  const { register, handleSubmit } = useForm();

  const imgData = new FormData();

  const postData = (data) => {
    console.log(data);
    const principalImg = data.image.principal[0];
    const secondaryImg = data.image.secondary;

    console.log(principalImg);
    console.log(secondaryImg);

    imgData.append("image.principal", principalImg);
    for (let i = 0; i < secondaryImg.length; i += 1) {
      imgData.append("image.secondary", secondaryImg[i]);
    }

    postProject(data, imgData);
    setTimeout(() => {
      getProject(setProject);
    }, 1000);
  };

  return (
    <DivContainer>
      <FormContainer
        onSubmit={handleSubmit(postData)}
        encType="multipart/form-data"
      >
        <Div>
          <Input
            type="text"
            name="name"
            placeholder="Nom du projet"
            {...register("name", { required: true })}
          />
        </Div>
        <Div>
          <Input
            type="text"
            name="year"
            placeholder="anné de réalisation"
            {...register("year", { required: true })}
          />
        </Div>
        <Div>
          <Input
            type="textarea"
            name="details"
            placeholder="detail du projet"
            {...register("details", { required: true })}
          />
        </Div>
        <Div>
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
        </Div>
        <Div>
          <Input
            type="text"
            name="link"
            placeholder="Lien vers le projet"
            {...register("link", { required: true })}
          />
        </Div>
        <Div>
          <InputButton type="submit" value="Envoyer le formulaire" />
        </Div>
      </FormContainer>
    </DivContainer>
  );
};

const FormContainer = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  border-radius: 20px;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid blue;
`;

const InputButton = styled.input`
  width: 150px;
  height: 50px;
  background-color: #094b65;
  border-radius: 30px;
  color: white;
`;

export default AddProjectForm;
