import React from "react";

function Search({setSearch}){

  function handleSearch(e){
    let value= e.target.value
    setSearch(value)
  }
  return (
    <div id="searchbar-container">
      <div id="search-label">
      <img className="search-image" src="/images/search.gif" />
      <label className="search-font">Urban Search</label>
      <img className="search-image" src="/images/search.gif" />
      </div>
     <div id="input-container"> 
      <input onChange={handleSearch}
        type="text"
        id="search"
        placeholder="Lookup Term"
      />
      </div>
    </div>
    );
}
export default Search