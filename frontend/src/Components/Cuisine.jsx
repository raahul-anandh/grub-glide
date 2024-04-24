import { useState, useEffect } from "react";
import axios from "axios";
import { CreateFoodCard } from "./FoodCard.jsx";
import ContactSection from "./Contact/Contact.jsx";
import "./styles/Cuisine.css";

function Cuisine() {
  const [chinese, setChinese] = useState([]);
  const [indian, setIndian] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    getFood();
  }, []);

  const getFood = async () => {
    try {
      const result = await axios.get("http://localhost:4000/plateform/food-list",{withCredentials: true});
      const foodList = result.data.data;
      // Filter food into different arrays based on category
      const chineseFoods = foodList.filter(food => food.category === "chinese");
      const indianFoods = foodList.filter(food => food.category === "indian");
      const snacksFoods = foodList.filter(food => food.category === "snacks");
      // Set state for each category
      setChinese(chineseFoods);
      setIndian(indianFoods);
      setSnacks(snacksFoods);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };
  
  return (
    <div>
      <section className="all-cuisines">
        <div className="cuisine-container">
          <h1 className="cuisine-name">Chinese</h1>
          <div className="cuisine">{
          chinese === null
          ? ""
          : chinese.map(CreateFoodCard)}
          </div>
        </div>
        

        <div className="cuisine-container">
          <h1 className="cuisine-name">Indian</h1>
          <div className="cuisine">{
          indian === null
          ? ""
          : indian.map(CreateFoodCard)}
          </div>
        </div>

        <div className="cuisine-container">
          <h1 className="cuisine-name">Snacks</h1>
          <div className="cuisine">{
          snacks === null
          ? ""
          : snacks.map(CreateFoodCard)}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default Cuisine;
