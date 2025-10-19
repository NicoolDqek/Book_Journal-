    const express=require('express')
    const cors=require('cors')
    const db= require('./Auth_Service/config/dbConnection')
    require('dotenv').config()
    const userRouter=require('./Auth_Service/routes/userRouter')
    const externRoutes = require('./library_service/routes/externRoutes')
       const  bookRoutes = require('./library_service/routes/bookRoutes')
    const PORT= process.env.PORT_AUTH
    const app = express()
    app.use(express.json())
    app.use(cors());


    app.use('/usuario',userRouter)
app.use('/externo',externRoutes)
app.use('/books',bookRoutes)
    db()
    app.get('/',(req,res)=>{
    res.send('Servidor funcionando');
    }) 

    app.listen(PORT,()=>{
    console.log(`conetado al puerto ${PORT} 🧑‍💻`)
    })



