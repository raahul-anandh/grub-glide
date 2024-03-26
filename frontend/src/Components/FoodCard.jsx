import React from "react";
import "./styles/FoodCard.css";
import Quantity from "./Quantity.jsx";
function FoodCard(food) {
  
  return (
    <div className="foodcard">
      <div className="left">
        <img src={food.imgURL} alt={food.foodName} />
      </div>
      <div className="right">
        <h1 className="foodname">{food.foodName}</h1>
        <h2 className="servings">{"Serves " + food.servings}</h2>
        <div className="price-quantity">
          <p className="price">{"Rs ." + food.price}</p>
          <Quantity/>
        </div>
      </div>
    </div>
  );
}

function CreateFoodCard(food) {
  return (
    <FoodCard
      key={food.id}
      foodName={food.foodName}
      imgURL={food.imageURL}
      servings={food.servings}
      price={food.price}
    />
  );
}
export { FoodCard, CreateFoodCard };
