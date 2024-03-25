const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})
//static signup method
userSchema.statics.signUp = async function(email,password){
    //validation
    if(!email || !password){
        throw Error("all feilds must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("password is not stong enough")
    }

    const exist = await this.findOne({email})
    if(exist){

        throw Error('email already exist')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email,password:hash})
    return user
}
//static login method
userSchema.statics.login = async function(email,password){
      if(!email || !password){
        throw Error("fill the feilds")
      }
      const user = await this.findOne({email})
      if(!user){
        throw Error("inavlid email")
      }
      const match = await bcrypt.compare(password,user.password)
      if(!match){
        throw Error("invalid password")
      }
      return user
}
module.exports = mongoose.model('Users',userSchema)


