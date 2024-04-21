import React from "react";
import "./styles/FoodCard.css";
import Quantity from "./Quantity.jsx";
function FoodCard(food) {
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
          <Quantity/>
        </div>
      </div>
    </div>
  );
}

function CreateFoodCard(food) {
  return (
    <FoodCard
      key={food._id}
      foodName={food.foodName}
      image={food.image}
      servings={food.serves}
      price={food.price}
    />
  );
}
export { FoodCard, CreateFoodCard };
