import React, { useState, useEffect } from "react";
import CohortForm from "./CohortForm";
import CohortList from "./CohortList";
import Search from "./Search"; 

function CohortPage(){
  const [terms, setTerms]= useState([]);
  const [search, setSearch]= useState('');


  useEffect(()=> { 
    fetch('http://localhost:4000/cohort')
    .then (r=> r.json())
    .then (termArray => setTerms(termArray))
  },[])

  function addNewTerm(newObj){
    setTerms([...terms, newObj])
  }

  const searchArray = terms.filter((word)=> {
    return word.term?.toLowerCase().includes(search.toLowerCase())
  })
  function handleDeleteCard(id){
    const newTermsArray = terms.filter((term)=>term.id !== id)
    setTerms(newTermsArray) 
    }

  return (
    <div className="CohortPage">
      <br /> 
      <Search setSearch={setSearch}/>
      <CohortForm addNewTerm={addNewTerm}/>
      <CohortList 
          terms={searchArray} 
          handleDeleteCard={handleDeleteCard} />
      
    </div>
  );

}



export default CohortPage;