import React, { useState } from "react";
import "./styles/SearchBar.css";
import axios from "axios";

const cuStyle = { display: "inline" };

function SearchBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState();

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(
          `http://localhost:4000/plateform/search-food?foodName=${searchQuery}`
        );
        setSearchResults(response.data.data);
      } catch (error) {
        console.error("Error searching for food items:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="searchbar" style={cuStyle}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
