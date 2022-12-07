import React, { useEffect, useState } from "react";
import VocabularyList from "./VocabularyList";
import VocabularyForm from "./VocabularyForm";
import VocabularyCard from "./VocabularyCard";
import Search from "./Search"




function VocabularyPage() {
  const[defines, setDefines] = useState([])
  const[search, setSearch] = useState('')

  const baseUrl = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=`
  let searchTerm = `${search}`
  searchTerm = "fasho"
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    };
    
    useEffect(()=>{
      fetch(baseUrl + searchTerm, options)
        .then(response => response.json())
        .then(console.log)
        .catch(err => console.error(err));
      },
    [])

    
    
  return (
    <div>
      <h1 className="search"> Search Term </h1>
      <br /> 
            <VocabularyList defines={defines} setDefines={setDefines} />
            <VocabularyForm/>
            <VocabularyCard />
            <Search searchTerm={searchTerm} setSearch={setSearch}/>
    </div>
  );
}


export default VocabularyPage;



