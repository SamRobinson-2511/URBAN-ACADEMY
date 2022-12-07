import React, { useEffect, useState } from "react";
import VocabularyList from "./VocabularyList";
import VocabularyForm from "./VocabularyForm";
import VocabularyCard from "./VocabularyCard";




function VocabularyPage() {
  return (
    <div>
      <h1 className="search"> Search Term </h1>
      <br /> 
            <VocabularyList/>
            <VocabularyForm/>
            <VocabularyCard/>
    </div>
  );
}

export default VocabularyPage;



