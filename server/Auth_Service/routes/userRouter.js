const express=require('express')
const { register, login, perfil } = require('../controllers/userControllers')
const { authMiddleware } = require('../middleware/usuarioMiddleware')
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get("/me", authMiddleware, perfil);



module.exports= router