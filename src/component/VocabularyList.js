import React from "react";
import VocabularyCard from "./VocabularyCard";

function VocabularyList({terms, handleDeleteCard}) {
  const termCard = terms.map((term)=>{
    return (
      <VocabularyCard
      key={term.id}
      id={term.id}
      term={term.term}
      definition={term.definition}
      example={term.example}
      moreInfo={term.moreInfo}
      handleDeleteCard={handleDeleteCard}
      />
    )
  })

return (
  <div className="vocab-cards">
    <li className="cards">{termCard}</li>
  </div>
);
}

export default VocabularyList;