const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    currentDate: {
        type: Date,
        default: Date.now
    },
    user: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'User'
    },
    items: [{
        name: String,
        quantity: Number,
        price: Number
    }],
    total: Number,
    status: {
        type: String,
        default: 'Pending'
    }
}, {
    collection: "orders"
}
);

module.exports = mongoose.model('orderSchema', orderSchema);
