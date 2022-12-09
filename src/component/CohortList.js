import React from "react";
import CohortCard from "./CohortCard";

function CohortList({terms, handleDeleteCard}) {
  const termCard= terms.map((term)=> {
    return (
    <CohortCard 
    key={term.id}
    id={term.id}
    term={term.term} 
    image={term.image} 
    definition={term.definition}
    example={term.example}
    moreInfo={term.moreInfo}
    handleDeleteCard={handleDeleteCard}/>
    )
  })
  return (
    <ul className="cards">{termCard}</ul>
  );
}

export default CohortList;
