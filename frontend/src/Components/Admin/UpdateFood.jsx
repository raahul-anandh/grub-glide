import { useEffect, useState } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";

function UpdateFood(){
    const id = localStorage.getItem("foodID");
    const [formData, setFormData] = useState({
        foodName: '',
        category: '',
        price: '',
        serves: '',
        stockAvailable: '',
        image: '',
    });

    useEffect(() => {
        async function fetchFoodDetails(){
            try{
                const response = await axios.get(`http://localhost:4000/plateform/food-details/${id}`);
                const { data } = response.data;
                setFormData(data);
            }
            catch (error) {
                console.error("Error fetching food details:", error);
            }
        }
        fetchFoodDetails();
    }, [id]);

    return(<div>
        <FoodForm 
        foodID = {id}
        foodName = {formData.foodName}
        category = {formData.category}
        price = {formData.price}
        serves = {formData.serves}
        stockAvailable = {formData.stockAvailable}
        image = {formData.image}
        action = "update"
        header = "Update Food"
        ></FoodForm>
    </div>)

}
export default UpdateFood;