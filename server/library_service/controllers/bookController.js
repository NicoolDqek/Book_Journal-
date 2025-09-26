const Book = require("../models/BookShema")



const createBook =async(req,res) => {

const usuarioId = req.user?.id    
const {
    titulo,
    author,
    fecha_publicacion,
    descripcion,
    rating_general,
    rating_user,
    genero,
    numero_paginas,
    portada,
    fecha_ingreso
  } = req.body;
    try {
       
        if (!usuarioId) {
           return res.status(400).json({message:'usuario no existe'})
        }

        const libro = new Book({
        titulo,
        author,
        fecha_publicacion,
        descripcion,
        rating_general,
        rating_user,
        genero,
        numero_paginas,
        portada,
        fecha_ingreso,
        usuario: usuarioId
        })

        const guardar = await libro.save()

         return res.status(201).json({
      message: `Libro "${guardar.titulo}" agregado correctamente`,
      data: guardar
    });


    } catch (error) {
           return res.status(500).json({message:'libro no se pudo agregar',error:error.message})
        
    }
}


const getBooks = async(req,res) => {

    try {
        const libros= await Book.find()
        res.status(200).json({libros})
    } catch (error) {
           return res.status(500).json({message:'libro no se obtener',error:error.message})
      
        
    }

}


module.exports= {createBook,getBooks}