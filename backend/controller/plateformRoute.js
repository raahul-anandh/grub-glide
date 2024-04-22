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
    //   const uniqueSuffix = Date.now()
      cb(null, file.originalname) 
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

// Get food details by ID
plateformRoute.get("/food-details/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const food = await foodSchema.findById(id);
        res.json({ status: "ok", data: food });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});


// Update food
plateformRoute.put("/update-food/:id", upload.single("image"), async (req, res) => {
    const { id } = req.params;
    const { foodName, category, price, serves, stockAvailable } = req.body;
    // const imageName = req.file.filename;

    try {
        let imageName;
        if (req.file) {
            imageName = req.file.filename;
        }
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

// Delete food
plateformRoute.delete("/delete-food/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Find the food item by ID and delete it
        const deletedFood = await foodSchema.findByIdAndDelete(id);
        if (!deletedFood) {
            // If the food item with the provided ID is not found, return a 404 status code
            return res.status(404).json({ status: "error", message: "Food item not found" });
        }
        res.json({ status: "ok", message: "Food item deleted successfully" });
    } catch (error) {
        // If an error occurs during the deletion process, return a 500 status code with the error message
        console.error("Error deleting food item:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
})


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

plateformRoute.post("/create-user", upload.none(), async (req,res)=> {
    
    console.log(req.body);
    try{
        await userSchema.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            // orders:{},
        })
        res.json({ status: "ok" });
    }catch(error){
        res.json({ status: error.response });
    }

})



module.exports = plateformRoute;