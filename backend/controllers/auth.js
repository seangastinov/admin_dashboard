const express = require('express');
const getAuth = async(req, res) => {
    res.send('This is the auth route')
}
module.exports = getAuth