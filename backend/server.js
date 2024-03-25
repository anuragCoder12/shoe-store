const express = require('express')
require('dotenv').config()
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("listening to port", process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err)
})


const product = require('./router/product')
const user = require('./router/user')


app.use('/api/product', product)
app.use('/api/user',user)

