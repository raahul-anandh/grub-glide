import React from "react";
import Navbar from "./Navbar";
import Cuisine from "./Cuisine";
import "../styles.css";

// style = { backgroundColor: "#3A4750" };

function App() {
  return (
    <div className="mainRoot">
      <Navbar />
      <Cuisine />
    </div>
  );
}

export default App;
