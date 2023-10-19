const express = require('express')
const auth=require('../middlewear/auth')
const router=express.Router()
const home=require('../controller/home')


router.get('/',auth,home)


module.exports=router