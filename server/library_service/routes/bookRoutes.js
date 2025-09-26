const express=require('express')
const {createBook,getBooks} = require('../controllers/bookController')
const router=express.Router()
const { authMiddleware } = require('../middleware/usuarioMiddleware');

router.post('/create', authMiddleware, createBook);
router.get('/all_books', authMiddleware,getBooks);

module.exports=router