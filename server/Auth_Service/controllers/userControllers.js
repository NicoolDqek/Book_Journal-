const User = require("../models/UsuarioSchema")
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt= require('jsonwebtoken')



const register =async(req,res) => {

    const {nombre,apellido,correo,contraseña} = req.body

try {

    const existe= await User.findOne({correo})

    if (existe) {
        return res.status(400).json({message:'error correo ya existe'})
    }

    const contraseña_incriptada= await bcrypt.hash(contraseña,10)

const usuario = new  User (
{
    nombre,
    apellido,
    correo,
    contraseña:contraseña_incriptada
}
)

const guardar = await usuario.save()
        
return res.status(201).json({
  message: "Usuario registrado con éxito",
  user: {
    nombre: guardar.nombre,
    correo: guardar.correo
  }
});


} catch (error) {
           return res.status(500).json({
      message: "Error al registrar usuario",
      error: error.message
    });     
}
}




const login = async(req,res) => {

    const {correo,contraseña} = req.body

    try {

   const usuario= await User.findOne({correo})

    if (!usuario) {
        return res.status(400).json({message:'email no existe'})
    }

    const match = await bcrypt.compare(contraseña,usuario.contraseña)

         if (!match) {
        return res.status(400).json({message:'contraseña invalida no compatible'})
         }

  const token = jwt.sign(
    {_id:usuario._id,correo:usuario.correo},
    process.env.JWT_SECRET,
    { expiresIn: '1h'}
  )

return res.status(201).json({message: `Usuario ${usuario.nombre} logueado con éxito`,user:token})

    } catch (error) {
       return res.status(500).json({ message: "Error en el login", error: error.message }); 
    }

}


const perfil = async(req,res) => {

  return res.status(200).json({
    message: "Perfil del usuario",
    user: req.user,
    })
}
 

module.exports={register,login,perfil}