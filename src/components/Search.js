import React from "react";

function Search({ searchState, setSearchState, handleSearch}) {



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchState}  onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
