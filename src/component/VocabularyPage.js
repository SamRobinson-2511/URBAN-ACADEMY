import React, { useState, useEffect } from "react";
import VocabularyForm from "./VocabularyForm";
import VocabularyList from "./VocabularyList";
import Header from "./Header"
import Search from "./Search"



function VocabularyPage() {
  const [terms, setTerms]= useState([]);


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2',
  //     'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  //   }
  // };
  // useEffect(()=>{
  // fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat', options)
  // .then(response => response.json())
  // .then(terms => setTerms(terms))
  // .catch(err => console.error(err));
  // },[])

 

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



