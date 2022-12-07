import React, { useState, useEffect } from "react"


function Search() {
  const[defines, setDefines] = useState([])
  const[search, setSearch] = useState('')

  const baseUrl = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=`
  let searchTerm = `${search}`
  

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
    .then(defines => console.log(defines))
    .catch(err => console.error(err));
    },[])

    function handleSubmit(e){
      e.preventDefault()
    }


    return (
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <label htmlFor="search">Search Terms:</label>
          <input
            type="text"
            id="search"
            placeholder="How do you say it?"
            value={searchTerm}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button type="submit">💣</button>
        </div>
      </form>
  );
}

export default Search;
  