const mongoose=require('mongoose')
require('dotenv').config()

const db = () => {
    try {
        mongoose.connect(process.env.MONGO_URI_AUTH)
        console.log('conectado a la base de datos auth 🙍‍♀️')
    } catch (error) {
        console.log('error al conectar a la base de datos auth ❌ ')
        
    }
}

module.exports=db