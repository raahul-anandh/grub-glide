const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    serves: {
        type: Number,
        required: true
    },
    stockAvailable: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
}, {
    collection: "food_items"
})
module.exports = mongoose.model("foodSchema", foodSchema);