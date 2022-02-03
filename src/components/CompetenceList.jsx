import CompetenceCards from "./CompetenceCards";

const CompetenceList = ({competence}) => {


    return competence.map((comp) => (
      <CompetenceCards
        technologie={comp.technologie}
        skills={comp.skills}
      />
    ));
  };

export default CompetenceList;