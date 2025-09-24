const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema ({

nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true, // evita duplicados
    lowercase: true,
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 6, // seguridad mínima
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
});


const User = mongoose.model('users',userSchema)
module.exports= User