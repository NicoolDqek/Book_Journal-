const express=require('express')
const { getGoogleBook } = require('../controllers/googleController');
const router=express.Router()

router.get('/googleBook',getGoogleBook)



module.exports=router