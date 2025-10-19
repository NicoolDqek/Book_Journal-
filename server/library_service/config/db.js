const mongoose=require('mongoose')
require('dotenv').config()


const dbconect = async()=> {
    try {
        mongoose.connect(process.env.MONGO_URI_BOOK)
        console.log('conexion establecida... ❤️')
    } catch (error) {
        console.log('error al conectarse a la base de datos de libros',error)
        
    }
}


module.exports=dbconect