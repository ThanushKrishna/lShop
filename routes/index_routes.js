const express = require('express');
const router = express.Router();
const userRout = require('./user');
const adminRoute = require('./admin')

router.get('/home', (req, res)=> {
    return res.status(200).send("Home Page")
})

router.use('/users', userRout);

router.use('/admin', adminRoute)

module.exports = router