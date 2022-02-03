import { useForm } from "react-hook-form";
import postCompetence from "../data/postCompetence";
import DivContainer from "../styled-components/Form";
import styled from "styled-components";
import getCompetence from "../data/getCompetence";

function AddCompetenceForm({ setCompetence }) {
  const { register, handleSubmit } = useForm();

  const postData = (data) => {
    postCompetence(data);
    setTimeout(() => {
      getCompetence(setCompetence);
    }, 1000);
    
  };

  return (
    <DivContainer>
      <FormContainer onSubmit={handleSubmit(postData)}>
        <Div>
          <Input
            type="text"
            name="technologie"
            placeholder="technologie"
            {...register("technologie", { required: true })}
          />
        </Div>
        <Div>
          <Input
            type="text"
            name="skills"
            placeholder="skills"
            {...register("skills", { required: true })}
          />
        </Div>
        <Div>
          <InputButton type="submit" value="Envoyer le formulaire" />
        </Div>
      </FormContainer>
    </DivContainer>
  );
}

const FormContainer = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
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

export default AddCompetenceForm;
