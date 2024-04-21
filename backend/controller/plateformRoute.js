const express = require("express");
const userSchema = require("../model/userSchema");
const foodSchema = require("../model/foodSchema");
const plateformRoute = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../frontend/src/FoodImages")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname) 
    }
  })
  
  const upload = multer({ storage: storage })

// Food
plateformRoute.post("/create-food", upload.single("image"), async (req, res) => {
    console.log(req.body);
    // res.send("Uploaded");
    const imageName = req.file.filename;
    try{
        await foodSchema.create({
            foodName: req.body.foodName,
            category: req.body.category,
            price: req.body.price,
            serves: req.body.serves,
            stockAvailable: req.body.stockAvailable,
            image: imageName,
        })
        res.json({ status: "ok" });
    }catch(error){
        res.json({ status: error.response.data });
    }
})

plateformRoute.get("/food-list", async(req, res) => {
    try{
        foodSchema.find({}).then(data => {
            res.send({status: "ok", data: data})
        })
    }
    catch(error){
        res.json({ status: error });
    }
})

// Update food
plateformRoute.put("/update-food/:id", upload.single("image"), async (req, res) => {
    const { id } = req.params;
    const { foodName, category, price, serves, stockAvailable } = req.body;
    const imageName = req.file.filename;

    try {
        await foodSchema.findByIdAndUpdate(
            id,
            {
                foodName,
                category,
                price,
                serves,
                stockAvailable,
                image: imageName
            }
        );
        res.json({ status: "ok" });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
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