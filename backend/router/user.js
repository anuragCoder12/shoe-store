const express = require('express')
const router = express.Router()

const { signupUser,loginUser } = require('../controllers/users')
//sign up user 
router.post('/signup',signupUser)
router.get('/signup',signupUser)

//login user 
router.post('/login',loginUser)

module.exports = router