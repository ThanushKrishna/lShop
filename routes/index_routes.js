const express = require('express');
const router = express.Router();
const userRout = require('./user');

router.get('/home', (req, res)=> {
    return res.status(200).send("Home Page")
})

router.use('/users', userRout);

module.exports = router