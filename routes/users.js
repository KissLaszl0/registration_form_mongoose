const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');


router.route("/register")
.post(userController.addUser)

router.route("/list")
.get(userController.getUsers)

module.exports = router;
