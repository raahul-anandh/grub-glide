const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    phone : {
        type:String, 
        unique: true,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    // "orders": {type: Array},
}, {
    collection: "users"
})
module.exports = mongoose.model("userSchema", userSchema);