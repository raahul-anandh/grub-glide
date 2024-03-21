import React from "react";
import "./styles/SearchBar.css";
const cuStyle = { display: "inline" };

function SearchBar() {
  return (
    <div className="searchbar" style={cuStyle}>
      <input type="text" placeholder="Search"></input>
    </div>
  );
}

export default SearchBar;
