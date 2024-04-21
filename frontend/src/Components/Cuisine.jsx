import {useState, useEffect} from "react";
import axios from "axios";
import { CreateFoodCard } from "./FoodCard.jsx";
import ContactSection from "./Contact/Contact.jsx";
import "./styles/Cuisine.css";
// import chinese from "../Database/Images/chinese";
import snacks from "../Database/Images/snacks";
import indian from "../Database/Images/indian";



function Cuisine() {
  const [chinese, setChinese] = useState(null);

  useEffect(() => {
    getFood();
  }, [])

  const getFood = async() => {
    const result = await axios.get("http://localhost:4000/plateform/food-list");
    console.log(result.data);
    setChinese(result.data.data);
  }

  return (
    <div>
    <section className="all-cuisines">
      <div className="cuisine-container">
        <h1 className="cuisine-name">Chinese</h1>
        <div className="cuisine">{
          chinese == null
          ? ""
          : chinese.map(CreateFoodCard)}</div>
      </div>

      {/* <div className="cuisine-container">
        <h1 className="cuisine-name">Indian</h1>
        <div className="cuisine">{indian.map(CreateFoodCard)}</div>
      </div>

      <div className="cuisine-container">
        <h1 className="cuisine-name">Snacks</h1>
        <div className="cuisine">{snacks.map(CreateFoodCard)}</div>
      </div> */}
    </section>
    <ContactSection/>
    </div>
  );
}

export default Cuisine;
