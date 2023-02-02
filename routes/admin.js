const adminController = require('../controller/adminController');
const express = require('express')
const adminRout = express.Router()

adminRout.get('/users', adminController.fetchUser)

module.exports = adminRout
