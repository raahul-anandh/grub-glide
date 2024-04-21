import React from "react";
import FoodForm from "./FoodForm";

function CreateFood(){
    return(
        <FoodForm 
        foodName = ""
        category = ""
        price = ""
        serves = ""
        stockAvailable = ""
        image = ""
        action = "create"
        ></FoodForm>
    )
}
export default CreateFood;