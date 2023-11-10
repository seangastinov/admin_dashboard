const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000 //arbitrary max length
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    category: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000 //arbitrary max length
    },
    status: {
        type: String,
        default: ()=>{
            if(this.stock > 0){
                return 'In-Stock'
            } else {
                return 'Out-of-Stock'
            }
        }
    },
    image: {
        type:[String],
        default: "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725150-stock-illustration-image-available-icon-flat-vector.jpg"
    },
})

module.exports = mongoose.model('Product', ProductSchema)