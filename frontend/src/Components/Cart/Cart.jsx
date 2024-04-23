import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItem } from "./CartItem";

import "../styles/Cart.css";

function Cart() {
  const navigate = useNavigate();
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

        // Calculating completion time
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

  const handleSubmitCart = async () => {
    try {
        const userId = localStorage.getItem('user');
        const items = cartItems.map(item => ({
            name: item.foodName,
            quantity: localCart[item._id],
            price: parseFloat(item.price)
        }));
        const cartTotal = parseFloat(total); // Ensuring total is properly initialized

        const response = await axios.post('http://localhost:4000/plateform/place-order', {
            userId,
            items,
            total: cartTotal
        });

        if (response.data.status === 'success') {
            alert('Order placed successfully!');
            // Resetting the cart after successful order placement
            localStorage.removeItem('cart');
            setCartItems([]);
            setTotal(0);
        } else {
            throw new Error('Failed to place order');
        }
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again later.');
    }
};

  return (
    <div className="cart-content">
      {cartItems.length === 0 ? (
        <div>
        <p className="empty-cart-message">Nothing in cart! Click to add items</p>
        <button onClick={() => {navigate("/")}}>Add Items</button>
        </div>
      ) : (
        <>
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
                  image={food.image}
                  serves={food.serves}
                  price={food.price}
                  quantity={localCart[food._id]} />
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <p className="total">Total: {total}</p>
          <div className="payment-method">
            <button onClick={handleSubmitCart}>Place Order!</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
