const Product = require("../models/product.js");

const getProduct = async (req, res) => {
    await Product.findById(req.params.id).then(order => {
        res.status(200).json(order)
    })
        .catch(err => res.status(400).json(err))
}

const getProducts = async (req, res) => {
    await Product.find().then(order => {
        res.status(200).json(order)
    })
        .catch(err => res.status(400).json(err))
}

const createProduct = async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        stock: req.body.stock,
    })
    try {
        const savedProduct = await newProduct.save();
        console.log('200');
        res.status(200).json(savedProduct);
    } catch (err) {
        console.log('500');
        res.status(500).json(err);
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}


const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Product has been deleted.'))
        .catch(err => res.status(400).json(err));
}


module.exports = {getProduct, getProducts, createProduct, updateProduct, deleteProduct};
