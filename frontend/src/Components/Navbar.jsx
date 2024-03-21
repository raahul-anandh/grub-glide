import React from "react";
import Navi from "./Navi";
import SearchBar from "./SearchBar";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Navi title="Home" />
      <SearchBar />
      <Navi title="Cart" />
      <Navi title="Account" />
    </div>
  );
}

export default Navbar;
