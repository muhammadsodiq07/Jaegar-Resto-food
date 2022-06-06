import React from "react";

function Search() {
  return (
    <div className="home__input-div">
      <i className="bx bx-search home__icon"></i>
      <input
        className="home__input"
        type="text"
        placeholder="Search for food, coffe, etc.."
      />
    </div>
  );
}

export default Search;
