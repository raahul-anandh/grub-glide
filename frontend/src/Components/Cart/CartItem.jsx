import React from "react";

function CartItem({ food, quantity, onQuantityChange }) {
  const handleInputChange = (event) => {
    onQuantityChange(event);
  };

  return (
    <tr className="cart-item">
      <td>
        <img src={require(`../../FoodImages/${food.image}`)} alt={food.foodName} />
      </td>
      <td>
        <h1>{food.foodName}</h1>
        <h2>{"Serves " + food.serves}</h2>
      </td>
      <td>
        <h1>{food.price}</h1>
      </td>
      <td>
        <input type="number" value={quantity} onChange={handleInputChange} />
      </td>
    </tr>
  );
}

export default CartItem;
