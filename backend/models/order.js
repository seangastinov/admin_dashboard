const mongoose = require('mongoose');
const helper = require('../routes/user.js')
const helperProd = require('../routes/product.js')
const OrderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //establish relationship with User model
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    cost: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    }

}, {
    timestamps: true //record createdAt and updatedAt timestamps
})

module.exports = mongoose.model('Order', OrderSchema)
