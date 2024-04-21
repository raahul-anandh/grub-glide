import React, { useState, useEffect } from 'react';

import "../styles/CreateFood.css";
import axios from 'axios';

function CreateFood() {
    const [formData, setFormData] = useState({
        foodName: '',
        category: '',
        price: '',
        serves: '',
        stockAvailable: '',
        image: null,
    });
    const [errors, setErrors] = useState({});
    const categories = [
        {value: "", text: "--Select a category--"},
        {value: "chinese", text: "Chinese"},
        {value: "indian", text: "Indian"},
        {value: "snacks", text: "Snacks"},
    ]
    const [category, setCategory] = useState(categories[0].value);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "category")
            setCategory(value)
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: undefined });
    };

    const handleImageChange = (e) => {
        console.log("Image selected:", e.target.files[0]);
        const imageFile = e.target.files[0];
        setFormData({ ...formData, image: imageFile });
        // console.log("FormData after updating image:", formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FormData before submission:", formData);
        const validationErrors = {};

        if (formData.foodName.trim() === '') {
            validationErrors.foodName = 'Food name is required';
        }

        if (formData.category.trim() === '') {
            validationErrors.category = 'Category is required';
        }

        if (formData.price.trim() === '' || isNaN(formData.price)) {
            validationErrors.price = 'Price must be a valid number';
        }

        if (formData.serves.trim() === '') {
            validationErrors.serves = 'Serves field is required';
        }

        if (formData.stockAvailable.trim() === '' || isNaN(formData.stockAvailable)) {
            validationErrors.stockAvailable = 'Stock available must be a valid number';
        }

        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formDataToSend = new FormData();
            formDataToSend.append('foodName', formData.foodName);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('serves', formData.serves);
            formDataToSend.append('stockAvailable', formData.stockAvailable);
            formDataToSend.append('image', formData.image);

        const result = await axios.post(
            "http://localhost:4000/plateform/create-food",
            formDataToSend,
            {
                headers: { "Content-Type": "multipart/form"}
            }
        )
    };

    return (
        <div className="create-food-container">
            <h2>Create Food</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Food Name:</label>
                    <input
                        type="text"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        required
                    />
                    {errors.foodName && <span className="error-message">{errors.foodName}</span>}
                </div>
                <div>
                    <label>Category:</label>
                    <select name="category"
                        value={category}
                        onChange={handleChange}
                        required>
                    {categories.map(category => (
                        <option key = {category.value} value= {category.value}>
                            {category.text}
                        </option>
                    ))}
                    
                    </select>
                    {errors.category && <span className="error-message">{errors.category}</span>}
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    {errors.price && <span className="error-message">{errors.price}</span>}
                </div>
                <div>
                    <label>Serves:</label>
                    <input
                        type="number"
                        name="serves"
                        value={formData.serves}
                        onChange={handleChange}
                        required
                    />
                    {errors.serves && <span className="error-message">{errors.serves}</span>}
                </div>
                <div>
                    <label>Stock Available:</label>
                    <input
                        type="number"
                        name="stockAvailable"
                        value={formData.stockAvailable}
                        onChange={handleChange}
                        required
                    />
                    {errors.stockAvailable && <span className="error-message">{errors.stockAvailable}</span>}
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        
                    />
                    {errors.image && <span className="error-message">{errors.image}</span>}
                </div>
                <button type="submit">Create Food</button>
            </form>
        </div>
    );
}

export default CreateFood;
