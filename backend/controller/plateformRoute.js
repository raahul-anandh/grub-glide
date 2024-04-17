const express = require("express");
const userSchema = require("../model/userSchema");
const foodSchema = require("../model/foodSchema");
const plateformRoute = express.Router();
const mongoose = require("mongoose");
const upload = require("../middleware/multerMiddleware");

// Food
plateformRoute.post("/create-food", upload.single('image'), async (req, res) => {
    try {
        console.log("Request file:", req.file); // Log the uploaded file information
        
        if (!req.file) {
            // If no file is uploaded, return an error
            console.error("No file uploaded");
            return res.status(400).send("No file uploaded");
        }

        const { foodName, description, price, serves, stockAvailable } = req.body;
        const imageUrl = req.file.path; // Get the path of the uploaded image

        // Log the form data
        console.log("Form data:", { foodName, description, price, serves, stockAvailable, imageUrl });

        const newFood = new Food({ foodName, description, price, serves, stockAvailable, imageUrl });
        await newFood.save();
        res.status(201).send("Food item created successfully");
    } catch (error) {
        console.error("Error creating food:", error);
        res.status(500).send("Internal server error");
    }
});

// --------------------------------------------------------------
// User
plateformRoute.get("/user-list", (req, res) => {
    userSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = plateformRoute;