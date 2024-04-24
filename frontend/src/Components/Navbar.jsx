import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import SearchBar from "./SearchBar";
import { useSearchContext } from "./SearchContext";
import "./styles/Navbar.css";

function Navbar() {
  const { setSearchResults } = useSearchContext();

  const [isScrolled, setIsScrolled] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  // const handleSearch = (results) => {
  //   setSearchResults(results);
  // }
    // console.log("From Nav: ", searchResults);
  
  return (
    <nav className={`Navbar ${isScrolled ? "scrolled" : "default"}`}>
      <Navi title="PlateForm" link="/" />
      <SearchBar setSearchResults={setSearchResults} />
      {/* <Navi title="Admin" link="/admin"/> */}
      <Navi title="Cart" link="/cart" />
      <Navi title="Login" link="/login" />
      <Navi title="Account" link="/account" />
    </nav>
    
  );
}

export default Navbar;
