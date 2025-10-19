
  
const libroPrueba = {
  titulo: "El Señor de los Anillos",
  author: "J.R.R. Tolkien",
  fecha_publicacion: new Date("1954-07-29"),
  descripcion: "Una épica historia de fantasía",
  rating_general: 7.9,
  rating_user: 5,
  genero: "Fantasía",
  numero_paginas: 1178,
  portada: "https://ejemplo.com/portada.jpg",
  fecha_ingreso: new Date(),
};




function validarBookData(data) {
    
  for (propiedad in data) {

    if ( typeof data[propiedad] === 'number' ) {
        if(data[propiedad] === "" && data[propiedad] <= 0) {
         throw Error('solo se  aceptan valores numericos y mayores de 0')
        }else{
            console.log(`${propiedad} correcta`)
        }
    }
     else if (typeof data[propiedad] === 'string') {
         if(data[propiedad] === "" && data[propiedad] <= 0) {
         throw Error('no cumple con los valores de texto')
        }else{
            console.log(`${propiedad} correcta`)
        }
     } 
  
     else if (data[propiedad] instanceof Date) {
      if (isNaN(data[propiedad].getTime())) {
        throw Error(` ${propiedad}: fecha inválida`);
      }else{
            console.log(`${propiedad} correcta`)
        }
    }

    else {
          throw Error(` ${propiedad}: tipo de dato no válido (${typeof data[propiedad]})`);
    }
    }
   
  }
validarBookData(libroPrueba)



function filtrarPorPaginas(libros, minPagina,maxpaginas) {

return libros.filter(l=>{
    if (minPagina && maxpaginas) return l.numero_paginas >= minPagina && l.numero_paginas <= maxpaginas
    if (minPagina) return   l.numero_paginas >= minPagina
    if (maxpaginas) return   l.numero_paginas <= maxPagina
})
}





function searchById(estados,id) {
return estados.find(e => e._id === id)
}



module.exports={validarBookData,filtrarPorPaginas,searchById}
