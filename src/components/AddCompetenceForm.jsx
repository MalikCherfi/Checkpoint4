import { useForm } from "react-hook-form";
import postCompetence from "../data/postCompetence";

function AddCompetenceForm() {
  const { register, handleSubmit } = useForm();

  const postData = (data) => {
    postCompetence(data);
  };

  return (
    <form onSubmit={handleSubmit(postData)} >
      <div>
        <input
          type="text"
          name="technologie"
          placeholder="technologie"
          {...register("technologie", { required: true })}
        />
      </div>
      <div>
        <input
          type="text"
          name="skills"
          placeholder="skills"
          {...register("skills", { required: true })}
        />
      </div>
      <input type="submit" value="Envoyer le formulaire" />
    </form>
  );
}

export default AddCompetenceForm;
