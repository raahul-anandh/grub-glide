import React from "react";
import ReactDOM from "react-dom";
import { CreateFoodCard } from "./FoodCard.jsx";
import "./styles/Cuisine.css";
import chinese from "../Database/Images/chinese";
import snacks from "../Database/Images/snacks";
import indian from "../Database/Images/indian";

function Cuisine() {
  return (
    <div className="cuisine-container">
      <h1>Chinese</h1>
      <div className="cuisine">{chinese.map(CreateFoodCard)}</div>
    </div>
  );
}

export default Cuisine;
