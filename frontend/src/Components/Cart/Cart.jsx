import React from "react";
import { CreateCartItem } from "./CartItem.jsx";
import cart from '../../Database/Images/cart.js';

import "../styles/Cart.css";

function Cart(){
    return(
        <div className="cart-content">
            <p className="completion-time">Your order will be ready in 20 minutes!</p>
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
                <tbody>{cart.map(CreateCartItem)}</tbody>   
            </table>
            </div>
            <hr/>
            <p className="total">Total: 200</p>
            <div className="payment-method">
                <label for="payment-method">Payment method: </label>
                <input type="radio" name="payment-method"/><label>Cash</label>
                <input type="radio" name="payment-method"/><label>UPI</label>
                <br/>
                <button >Proceed</button>
            </div>
        </div>
    )
}
export default Cart;

