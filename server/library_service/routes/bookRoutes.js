const express=require('express')
const {createBook,getBooks, getBookById, editBook, deleteBooks} = require('../controllers/bookController');
const { authMiddleware } = require('../../Auth_Service/middleware/usuarioMiddleware');
const router=express.Router()


router.post('/create', authMiddleware, createBook);
router.get('/all_books', authMiddleware,getBooks);
router.get('/:id', authMiddleware,getBookById);
router.patch('/:id', authMiddleware,editBook);
router.delete('/:id', authMiddleware,deleteBooks);

module.exports=router