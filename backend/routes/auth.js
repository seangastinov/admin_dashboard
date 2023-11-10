const express = require('express');
const getAuth = require('../controllers/auth.js');

const router = express.Router();
router.get('/', getAuth);

router.get('/login', (req, res) => {
})

module.exports = router;