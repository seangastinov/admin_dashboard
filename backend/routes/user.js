const express = require('express');
const {getUser, getUsers, createUser, updateUser, deleteUser} = require("../controllers/user.js");
const router = express.Router();

router.get('/:id', getUser)

router.get('/', getUsers)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router;
