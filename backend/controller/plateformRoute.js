const express = require("express");
const userSchema = require("../model/userSchema");
const foodSchema = require("../model/foodSchema");
const plateformRoute = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
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
            description: req.body.description,
            price: req.body.price,
            serves: req.body.serves,
            stockAvailable: req.body.stockAvailable,
            image: imageName,
        })
        res.json({ status: "ok" });
    }catch(error){
        res.json({ status: error });
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

module.exports = plateformRoute;