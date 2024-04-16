const express = require("express");
const userSchema = require("../model/userSchema");
const plateformRoute = express.Router();
const mongoose = require("mongoose");

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