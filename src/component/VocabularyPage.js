import React, { useState, useEffect } from "react";
import VocabularyList from "./VocabularyList";
import Search from "./Search"




function VocabularyPage() {
  const [terms, setTerms]= useState([]);
  const [search, setSearch]= useState('')
  

useEffect(()=> { 
  fetch('http://localhost:4000/terms')
  .then (r=> r.json())
  .then (termArray => setTerms(termArray))
},[])

const searchArray = terms.filter((word)=> {
  return word.term.toLowerCase().includes(search.toLowerCase())
})
function handleDeleteCard(id){
  const newTermsArray = terms.filter((term)=>term.id !== id)
  setTerms(newTermsArray) 
  }

function addNewTerm(newObj){
  setTerms(newObj)
}

  return (
    <div className="VocabularyPage">
      <br /> 
      <Search setSearch={setSearch}/>
      <VocabularyList 
            terms={searchArray} 
            handleDeleteCard={handleDeleteCard} />
      
    </div>
  );
}

export default VocabularyPage;



