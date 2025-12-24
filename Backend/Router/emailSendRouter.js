const express=require('express')
const { emailSendController } = require('../Controller/emailSendController')
const router=express.Router()

router.post('/email',emailSendController)

module.exports=router