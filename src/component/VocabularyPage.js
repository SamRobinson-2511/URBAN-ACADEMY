import React, { useState, useEffect } from "react";
import VocabularyForm from "./VocabularyForm";
import VocabularyList from "./VocabularyList";
import Header from "./Header"
import Search from "./Search"



function VocabularyPage() {
  const [terms, setTerms]= useState([]);

useEffect(()=> { 
  fetch('http://localhost:4000/terms')
  .then (r=> r.json())
  .then (termArray => setTerms(termArray))
},[])

 

  return (
    <div>
      <br /> 
            <Header />
            <VocabularyList terms={terms}/>
            <VocabularyForm/>
            <Search/>
    </div>
  );
}

export default VocabularyPage;



