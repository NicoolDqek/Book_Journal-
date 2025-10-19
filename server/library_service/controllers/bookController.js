const Book = require("../models/BookShema");
const { bookService } = require("../services/estados");


const createBook =async(req,res) => {

const usuarioId = req.user?._id    
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

const getBooks = async (req, res) => {
   
    const usuarioId = req.user?._id;
    
    if (!usuarioId) {
        return res.status(400).json({ message: "Usuario no existe" });
    }

  try {
    const librosUsuario = await bookService.cargarLibros(usuarioId);
    res.status(200).json({ libros: librosUsuario });
    
  } catch (error) {
    return res.status(500).json({
      message: "libro no se pudo obtener",
      error: error.message,
    });
  }
};


const getBookById = async(req,res) => {
const {id} = req.params
    try {
        const book = idFiltro(id)

        if (!book) {
          res.status(400).json({message:'libro no encontrado'})
        }

        res.status(200).json({message:'libro encontrado',libro:book})
    } catch (error) {
        res.status(500).json({message:'nose puede encontrar libro por id',error:error.message})
        
    }

}



const editBook = async(req,res) => {

    const {id} = req.params
     

    const {rating_user} = req.body;

const updates = req.body;
    try {
        const book = await Book.findOneAndUpdate(
            {_id: id,usuario: req.user.id},
            updates,
            {new: true}
        )

        if (rating_user && (rating_user < 1 || rating_user > 5)) {
  return res.status(400).json({ message: "El rating debe estar entre 1 y 5" });
}

        if (!book) {
      return res.status(404).json({ message: "Libro no encontrado o no autorizado" });
    }
    res.json({ message: "Libro actualizado con éxito", libro: book });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar libro", error: error.message });
  } 
    }



const deleteBooks = async(req,res) => {

const {id}= req.params
const usuarioId = req.user?._id 
    try {
    const book = await Book.findOneAndDelete({_id:id,usuario:usuarioId}) 
    
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado o no autorizado" });
    }

    res.status(200).json({ message: "Libro eliminado con exito", libro: book.titulo });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar libro", error: error.message });
        
    }
}





module.exports= {createBook,getBooks,getBookById,editBook,deleteBooks}