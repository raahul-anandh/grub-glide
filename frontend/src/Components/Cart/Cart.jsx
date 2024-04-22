import React, { useState, useEffect } from "react";
import axios from "axios";
import { CartItem } from "./CartItem";

import "../styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [completionTime, setCompletionTime] = useState(0);
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || {};
      setLocalCart(cart);
      const foodItems = Object.keys(cart);
      
      try {
        const promises = foodItems.map(foodId =>
          axios.get(`http://localhost:4000/plateform/food-details/${foodId}`)
        );
        const responses = await Promise.all(promises);
        const fetchedCartItems = responses.map(response => response.data.data);
        setCartItems(fetchedCartItems);

        const total = fetchedCartItems.reduce((acc, curr) => {
          const price = parseFloat(curr.price);
          const quantity = parseFloat(cart[curr._id]);
          return acc + price * quantity;
        }, 0);
        setTotal(total);

        // Calculate completion time
        const completionTime = fetchedCartItems.reduce((acc, curr) => {
          const prepTime = parseFloat(curr.prepTime);
          const quantity = parseFloat(cart[curr._id]);
          return acc + prepTime * quantity;
        }, 0);
        setCompletionTime(completionTime);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleSubmitCart = () => {
    // Implement submission of cart data to the backend for database update
    console.log("Submitting cart data to the backend:", cartItems);
  };

  return (
    <div className="cart-content">
      <p className="completion-time">Your order will be ready in {completionTime} minutes!</p>
      <div>
        <table className="item-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((food) => (
              <CartItem key={food._id} 
              foodName={food.foodName} 
              image = {food.image}
              serves = {food.serves}
              price = {food.price}
              quantity={localCart[food._id]} />
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <p className="total">Total: {total}</p>
      <div className="payment-method">
        <label htmlFor="payment-method">Payment method: </label>
        <input type="radio" name="payment-method" />
        <label>Cash</label>
        <input type="radio" name="payment-method" />
        <label>UPI</label>
        <br />
        <button onClick={handleSubmitCart}>Proceed</button>
      </div>
    </div>
  );
}

export default Cart;
