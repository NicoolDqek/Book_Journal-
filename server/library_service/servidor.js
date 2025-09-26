const express=require('express')
const cors=require('cors')
const dbconect = require('./config/db')
require('dotenv').config()
const app= express()
app.use(express.json())
app.use(cors())
const externRoutes = require('./routes/externRoutes')
const bookRoutes = require('./routes/bookRoutes')
const PORT= process.env.PORT_BOOKS
dbconect()





app.use('/externo',externRoutes)
app.use('/books',bookRoutes)

app.get('/',(req,res)=>{
    res.send('servidor libros corriendo...')
})

app.listen(PORT,()=>{
    console.log(`servidor libros corriendo en puerto ${PORT} 👍`)

})