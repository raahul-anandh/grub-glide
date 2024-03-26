import React from "react";
import { CreateFoodCard } from "./FoodCard.jsx";
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
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Feel free to reach out!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </div>
      </section>
    </div>
  );
}

export default Cuisine;
