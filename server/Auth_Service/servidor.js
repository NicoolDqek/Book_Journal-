    const express=require('express')
    const cors=require('cors')
    const db= require('./config/dbConnection')
    require('dotenv').config()
    const PORT= process.env.PORT_AUTH
    const app = express()
    app.use(express.json())
    app.use(cors());

    db()
    app.get('/',(req,res)=>{
    res.send('Servidor Auth funcionando');
    }) 

    app.listen(PORT,()=>{
    console.log(`conetado al puerto ${PORT} 🧑‍💻`)
    })