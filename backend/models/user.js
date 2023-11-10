const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    fullname: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024 //arbitrary max length
    },
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    country: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    status: {
        type: String,
        default: () =>{
            if(this.orders.length > 0){
                return 'Active'
            } else {
                return 'Inactive'
            }
        }
    },
    phone: {
        type: String,
        required: true,
        min: 6,
        max: 255 //arbitrary max length
    },
    image: {
        type: [String],
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    }
)

module.exports = mongoose.model('User', UserSchema)