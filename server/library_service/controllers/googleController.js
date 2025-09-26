const axios=require('axios')




const getGoogleBook = async(req,res) => {
const query = req.query.q
try {
 if (!query) {
return res.status(400).json({ message: "Falta parámetro de búsqueda (q)" })
}

const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)

const libros = response.data.items.map(item=>{
    const info = item.volumeInfo

    return{
        titulo: info.title || 'sin titulo',
        author: info.authors?.[0] || 'Autor desconocido',
        fecha_publicacion: info.publishedDate,
        descripcion:info.description,
        rating_general: info.averageRating,
        genero: info.categories,
        numero_paginas:info.pageCount,
        portada: info.imageLinks.thumbnail,
        
    }

  
})
  res.status(200).json(libros)   
} catch (error) {
      res.status(500).json({ message: "Error al buscar libros", error: error.message });
}

}

module.exports = { getGoogleBook };