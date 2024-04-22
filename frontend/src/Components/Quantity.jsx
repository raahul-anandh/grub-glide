import React, { useState } from 'react';
import "./styles/Quantity.css"

const QuantityButton = ({ initialQuantity = 0, stockAvailable, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange?.(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < stockAvailable) {
      setQuantity(quantity + 1);
      onQuantityChange?.(quantity + 1);
    } else {
      alert("Cannot add more than available stock");
    }
  };

  return (
    <div className="quantity-button">
      <button onClick={decreaseQuantity} style={{width:"1.5vw"}}>-</button>
      <span className="quantity">{quantity}</span>
      <button onClick={increaseQuantity}><i class="fa-solid fa-plus"></i></button>
    </div>
  );
};

export default QuantityButton;
