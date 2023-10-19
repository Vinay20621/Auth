const express = require('express')
const {PORT}=require('./config/index')
const userRoute=require('./routes/user')
const homeRoute=require('./routes/home')
const cors=require('cors')

const router=require('router')
const connect=require('./database/index')



const app=express()
// cors is used to communicate between frontent and backend
app.use(cors())
// frontent || postman give json data so your server not no json that why add 
app.use(express.json())

connect()
app.use(router())

app.use('/user',userRoute)
app.use('/home',homeRoute)

app.listen(PORT,()=>
{
    console.log(`server is running at port ${PORT}`)
})