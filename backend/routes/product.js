const express = require('express');
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require("../controllers/product.js");
const router = express.Router();

router.get('/:id', getProduct)

router.get('/', getProducts)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;
