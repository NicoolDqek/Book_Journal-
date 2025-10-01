const express=require('express')
const {createBook,getBooks, getBookById, editBook, deleteBooks} = require('../controllers/bookController')
const router=express.Router()
const { authMiddleware } = require('../middleware/usuarioMiddleware');

router.post('/create', authMiddleware, createBook);
router.get('/all_books', authMiddleware,getBooks);
router.get('/:id', authMiddleware,getBookById);
router.patch('/:id', authMiddleware,editBook);
router.delete('/:id', authMiddleware,deleteBooks);

module.exports=router