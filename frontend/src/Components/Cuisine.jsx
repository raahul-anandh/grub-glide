import React from "react";
import { CreateFoodCard } from "./FoodCard.jsx";
import ContactSection from "./Contact/Contact.jsx";
import "./styles/Cuisine.css";
import chinese from "../Database/Images/chinese";
import snacks from "../Database/Images/snacks";
import indian from "../Database/Images/indian";

function Cuisine() {
  return (
    <div>
    <section className="all-cuisines">
      <div className="cuisine-container">
        <h1 className="cuisine-name">Chinese</h1>
        <div className="cuisine">{chinese.map(CreateFoodCard)}</div>
      </div>

      <div className="cuisine-container">
        <h1 className="cuisine-name">Indian</h1>
        <div className="cuisine">{indian.map(CreateFoodCard)}</div>
      </div>

      <div className="cuisine-container">
        <h1 className="cuisine-name">Snacks</h1>
        <div className="cuisine">{snacks.map(CreateFoodCard)}</div>
      </div>
    </section>
    <ContactSection/>
    </div>
  );
}

export default Cuisine;
