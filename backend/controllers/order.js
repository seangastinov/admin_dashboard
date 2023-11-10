const Order = require("../models/order.js");
const mongoose = require('mongoose');
const User = mongoose.model('User')
const Product = mongoose.model('Product')

const getOrder = async (req, res) => {
    await Order.findById(req.params.id).then(order => {
        res.status(200).json(order)
    })
        .catch(err => res.status(400).json(err))
}

const getOrders = async (req, res) => {
    await Order.find().then(order => {
        res.status(200).json(order)
    })
        .catch(err => res.status(400).json(err))
}
const createOrder = async (req, res) => {
    const userID = req.body.userID;
    try {
        const user = await User.findById(userID);
        //no need to check if user exists because userID is referenced from User model and if not found, will throw error 500
        const orderAddress = user.address;

        const orderCost = async ()=>{
            let cost = 0;
            for(let i = 0; i < req.body.products.length; i++){
                const prod = await Product.findById(req.body.products[i].product)
                if(prod.stock < req.body.products[i].quantity) {
                    //NEED move to middleware
                    console.log('not enough stock')
                    res.status(404).text({error: 'Not enough stock'})
                };
                cost += prod.price*req.body.products[i].quantity;
                await Product.findByIdAndUpdate(req.body.products[i].product, {stock: prod.stock - req.body.products[i].quantity})
            }
            return cost;
        }

        const newOrder = new Order({
            userID: userID,
            products: req.body.products,
            address: orderAddress,
            name: req.body.name,
            cost: await orderCost()
        });

        const savedOrder = await newOrder.save();
        await User.findByIdAndUpdate(userID, { $push: { orders: savedOrder._id } });
        console.log('200');
        res.status(200).json(savedOrder);

    } catch (err) {
        console.log('500');
        res.status(500).json(err);
    }
}

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Order has been deleted.'))
        .catch(err => res.status(400).json(err));
}


module.exports = {getOrder, getOrders, createOrder, updateOrder, deleteOrder, User};