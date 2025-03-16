const express = require('express');

const userRouter = express.Router();

userRouter.post('/register', registerController);
userRouter.post('/login', loginController);