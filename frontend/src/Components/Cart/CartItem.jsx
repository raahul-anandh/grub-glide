function CartItem(food){
    return (
    <tr className="cart-item">
        <td>
              <img src={food.imgURL} alt={food.foodName} />
        </td>
        <td>
            <h1>{food.foodName}</h1>
            <h2>{"Serves " + food.servings}</h2>
        </td>
        <td>
          <h1>{food.price}</h1>
        </td>
        <td>
          <input type="number" placeholder="2"></input>
        </td>
    </tr>)
}

function CreateCartItem(food) {
    return (
      <CartItem
        key={food.id}
        foodName={food.foodName}
        imgURL={food.imageURL}
        servings={food.servings}
        price={food.price}
      />
    );
  }
export { CartItem, CreateCartItem };