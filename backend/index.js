const express = require("express");
const mongoose = require("mongoose");
const plateformRoute = require("./controller/plateformRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://admin:Csuzpre6UpkUbIi6@plateform.yvjbna2.mongodb.net/")
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/plateformRoute", plateformRoute);

app.listen(4000, () => {
    console.log("Server started at 4000");
})