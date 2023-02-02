const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.get('/signup', (req, res) => {
    return res.status(200).send("user created");
})

//userRouter.get('/login', userController.login)

module.exports = userRouter
