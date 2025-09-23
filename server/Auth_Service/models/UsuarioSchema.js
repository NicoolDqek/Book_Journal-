const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema ({

   nombre: {
    type: String,
    required: true,       // si quieres que sea obligatorio
    trim: true            // elimina espacios al inicio y fin
  },
  correo: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,      // convierte a minúsculas
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Correo inválido']  // validación email simple
  },
  contraseña: {
    type: String,
    required: true,
    // Puedes agregar validación con match o usar librerías externas para validar fortaleza
    // Ejemplo simple para mínimo 6 caracteres:
    match: [/^.{6,}$/, 'La contraseña debe tener al menos 6 caracteres']
  },
  create_user: {
    type: Date,
    default: Date.now
  }
})


const User = mongoose.model('users',userSchema)
module.exports= User