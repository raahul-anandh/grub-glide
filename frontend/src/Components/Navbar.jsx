import React ,{ useState, useEffect } from "react";
import Navi from "./Navi";
import SearchBar from "./SearchBar";
import "./styles/Navbar.css";

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get scroll position
      setIsScrolled(scrollTop > 0); // Update state based on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures attachment only once

  return (
    <nav className={`Navbar ${isScrolled ? 'scrolled' : 'default'}`}>
      <Navi title="Grubs" link="/"/>
      <SearchBar />
      <Navi title="Cart" link="/cart"/>
      <Navi title="Account" link="/admin" />
    </nav>
  );
}


export default Navbar;