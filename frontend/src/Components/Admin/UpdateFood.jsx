import { useEffect, useState } from "react";
import FoodForm from "./FoodForm";

function UpdateFood(){
    const [formData, setFormData] = useState({
        foodName: '',
        category: '',
        price: '',
        serves: '',
        stockAvailable: '',
        image: '',
    });

    return(<div>
        <FoodForm 
        foodID = {localStorage.getItem("foodID")}
        foodName = {formData.foodName}
        category = {formData.category}
        price = {formData.price}
        serves = {formData.serves}
        stockAvailable = {formData.stockAvailable}
        image = {formData.image}
        action = "update"
        ></FoodForm>
    </div>)

}
export default UpdateFood;