const express = require('express');

const {login, register, test} = require('../controller/authController');

const router = express.Router();

router.post("/register", register);
router.post('/login', login);
router.get('/test', test)

module.exports = router;