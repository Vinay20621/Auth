const express = require('express')
const auth=require('../middlewear/auth')
const router=express.Router()
const {signUp,login}=require('../controller/user')

router.post('/signin',signUp)
router.post('/login',login)



module.exports=router