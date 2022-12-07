import React from "react";


function Search({setSearch}) {

    return (
      <div className="searchbar">
        <label htmlFor="search">Search Terms:</label>
        <input
          type="text"
          id="search"
          placeholder="How do you say it?"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
  );
}
    
      
export default Search;