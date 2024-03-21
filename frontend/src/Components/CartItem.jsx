function CartItem(food){
    return (
    <tr className="cart-item">
        <td className="left">
                <img src={food.imgURL} alt={food.foodName} />
        </td>
        <td className="right">
            <h1 className="foodname">{food.foodName}</h1>
            <h2 className="servings">{"Serves " + food.servings}</h2>
        </td>
        <td>
          {food.price}
        </td>
        <td>
          <input type="number" placeholder="2"></input>
        </td>
        {/* <div className="bottom">
          <button><i class="fa-solid fa-plus"></i></button>
          <label>Qty</label><input type="text" placeholder="1"></input>
          <button><i class="fa-solid fa-minus"></i></button>
          <button><i class="fa-solid fa-trash"></i></button>
        </div> */}
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