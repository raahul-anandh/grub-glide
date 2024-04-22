import React from "react";
import FoodForm from "./FoodForm";

function CreateFood(){
    return(
        <FoodForm 
        foodID = ""
        foodName = ""
        category = ""
        price = ""
        serves = ""
        stockAvailable = ""
        prepTime = ""
        image = ""
        action = "create"
        header = "Create Food"
        ></FoodForm>
    )
}
export default CreateFood;