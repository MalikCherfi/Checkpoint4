import React from "react";

function CompetenceCards({ technologie, skills }) {
  return (
    <>
      <h1>{technologie}</h1>
      <p>{skills}</p>
    </>
  );
}

export default CompetenceCards;
