const express = require('express');
const mongoose = require("mongoose");
const { getOrder, getOrders, createOrder, updateOrder, deleteOrder } = require("../controllers/order.js");


const router = express.Router();

router.get('/:id',getOrder)

router.get('/', getOrders)

router.post('/', createOrder)

router.delete('/:id', deleteOrder)



module.exports = router;