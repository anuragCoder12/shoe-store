const Users = require('../models/users')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id},process.env.SECRET,{expiresIn: '3d'})
}
//login user
const loginUser = async(req,res) => {
    const {email,password} = req.body
    
    try {
        const user = await Users.login(email,password)
        const token = createToken(user._id)
        res.status(200).json({
            message:"Success",
            token: token,
            userId: user._id
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//signup user
const signupUser = async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await Users.signUp(email,password)
        //creating web token 
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
} 

module.exports = {
    signupUser,
    loginUser
}