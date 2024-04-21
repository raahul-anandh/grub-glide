import { useState } from "react";

function CartItem(food){
    // const {quantity, setQuantity} = useState(`${food.quantity}`);
    return(
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
          <input type="number" value = {`${food.quantity}`}></input>
        </td>
    </tr>)
}

export { CartItem };