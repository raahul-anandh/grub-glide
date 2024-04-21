import React from "react";
import "./styles/FoodCard.css";
import Quantity from "./Quantity.jsx";
import { useNavigate } from "react-router-dom";

function FoodCard(food) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const updateFood = () => {
    localStorage.setItem("foodID", food.id);
    navigate("/updatefood");
  }
  return (
    <div className="foodcard">
      <div className="left">
        <img src={require(`../FoodImages/${food.image}`) } alt={food.foodName} />
      </div>
      <div className="right">
        <h1 className="foodname">{food.foodName}</h1>
        <h2 className="servings">{"Serves " + food.servings}</h2>
        <div className="price-quantity">
          <p className="price">{"Rs ." + food.price}</p>
          {
            user === "admin"
            ? <div>
              <p>{"Stock " + food.stockAvailable}</p><br/>
              <button onClick={updateFood}>Update</button>
            
            
            </div>
            : <Quantity/>
          }
        </div>
      </div>
    </div>
  );
}

function CreateFoodCard(food) {
  return (
    <FoodCard
      id={food._id}
      foodName={food.foodName}
      image={food.image}
      servings={food.serves}
      price={food.price}
      stockAvailable = {food.stockAvailable}
    />
  );
}
export { FoodCard, CreateFoodCard };
