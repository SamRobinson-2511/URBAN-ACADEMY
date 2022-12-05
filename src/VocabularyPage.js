import React, { useState, useEffect }from "react";
import VocabularyList from "./VocabularyList";
import VocabularyForm from "./VocabularyForm";
import Search from "./Search";



function VocabularyPage() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  useEffect(()=>{
  fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  },[])

  // useEffect(()=>{
  //   const settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat",
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": "03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2",
  //       "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
  //     }
  //   };
  //   $.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });

  // }, [])
  
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2',
  //         'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  //       }
  //     fetch('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat', options)
  //       .then(response => response.json())
  //       .then(response => console.log(response))
  //       .catch(err => console.error(err))
  //     }
  // }, [])

  

  // function getData(){
  //   fetch("https://rapdiapi.com" {
  //     method: "GET",
  //     url: "mashape-community-urban-dictionary.p.rapidapi.com"
  //     withCredentials: true,
  //     headers: {
  //       "X-Auth-Token": "03af111f8cmsh681f36e41f11f5fp1691f8jsnc593d0c810f2",
  //       "cache-control": "no-cache, no-store, must-revalidate",
  //       "content-length": "2684",
  //       "content-type": "application/json;charset=utf-8"
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(function(data) {
  //       console.log(data)
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  //   }

 

  return (
    <div>
      <h1> Search Term </h1>
      <br /> 
            <VocabularyList />
            <VocabularyForm/>
            <Search/>
    </div>
  );
}

export default VocabularyPage;



