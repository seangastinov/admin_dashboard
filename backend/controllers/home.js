const express = require('express');
const getHome = async(req, res) => {
    res.send('This is the home route')
}
module.exports = getHome()