import React from "react";
import VocabularyCard from "./VocabularyCard";

function VocabularyList({terms}) {
  const termCard = terms.map((term)=>{
    return (
      <VocabularyCard
      key={term.id}
      term={term.term}
      definition={term.definition}
      example={term.example}
      moreInfo={term.moreInfo}
      />
    )
  })

return (
  <div>
    <ul className="cards">{termCard}</ul>
  </div>
);
}

export default VocabularyList;