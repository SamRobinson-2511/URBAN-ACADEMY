import React from "react"


function Search({searchTerm, setSearch}) {

  function handleSubmit(e){
    
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
  