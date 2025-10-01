const Book = require("../models/BookShema")

const getAutor = async(req,res) => {

    const {autor} = req.query


    try {
        const author= await Book.find({author:autor})

if (author.length === 0) {
      return res.status(404).json({ message: "No se encontraron libros con ese author" });
    }
   return res.status(200).json({message:'autor encontrado',author})

    } catch (error) {
    res.status(500).json({message:'filtro author fallo',error:error.message})
        
    }
}

const getGenero = async(req,res) => {
     const {genero}=req.query

     try {
        const gender = await Book.find({genero:genero})


        if (gender.length === 0) {
      return res.status(404).json({ message: "No se encontraron genero",gender });
    }
        
   return res.status(200).json({message:'genero encontrado',gender })

     } catch (error) {
    res.status(500).json({message:'filtro genero fallo',error:error.message})
        
     }
}

const getRating = async(req,res) => {
     const {rating}=req.query

     try {
        const calificacion = await Book.find({rating_general:rating})

        if (calificacion.length === 0) {
      return res.status(404).json({ message: "No se encontraron libros con rating",rating});
    }
   
   return res.status(200).json({message:'rating encontrado',calificacion})

     } catch (error) {
    res.status(500).json({message:'filtro rating fallo',error:error.message})
        
     }
}


const getTittle = async(req,res) => {
     const {q}=req.query

     try {
        const match = new RegExp(q,'i')
        const resultado = await Book.find({titulo:match})

        if (match.length === 0) {
      return res.status(404).json({ message: "No se encontraron libros"});
    }
        
   return res.status(200).json({message:'libro',resultado})

     } catch (error) {
    res.status(500).json({message:' fallobusqueda',error:error.message})
     }
     }



    // queries 
    //  futuro arreglo  mejorar con indices


    const bookFiltros = async (req,res) => {
     const {genero,rating,author} = req.query
     const querys= {}

        if (genero) querys.genero = genero 
        if (rating) querys.genero = rating 
        if (author) querys.genero = author
     try {
 
        const books = await Book.find(querys);
        
        if (querys.length === 0) {
return res.status(404).json({ message: "No se encontraron libros" });
        }
res.json({ count: books.length, books });

     } catch (error) {
           res.status(500).json({ message: "Error al buscar libros", error: error.message });
     }


    }

const ordenarmientoBook = async (req, res) => {
  const {
    ratingSort = "asc",
    tituloSort = "asc",
    ratingUserSort = "asc",
    paginasSort = "asc",
    fechaSort = "asc",
  } = req.query;


  const sortMap = {
    rating: ratingSort,
    titulo: tituloSort,
    rating_user: ratingUserSort,
    numero_paginas: paginasSort,
    fecha_ingreso: fechaSort,
  };


  const sortOptions = {};
  for (const key in sortMap) {
    if (sortMap[key]) {
      sortOptions[key] = sortMap[key] === "asc" ? 1 : -1;
    }
  }

  try {
    const books = await Book.find().sort(sortOptions);

    if (books.length === 0) {
      return res.status(404).json({ message: "No hay libros para ordenar" });
    }

    res.status(200).json({ message: "Libros ordenados", books });
  } catch (error) {
    res.status(500).json({ message: "Error al ordenar libros", error: error.message });
  }
};


module.exports= {getAutor,getGenero,getRating,getTittle,bookFiltros,ordenarmientoBook}
