 const mongoose=require('mongoose')


 const bookSchema = new mongoose.Schema({

titulo : {
    type: String,
    required:true
},
author: {
    type:String,
    required: true
},
fecha_publicacion : {
    type: Date
},
descripcion: {
type: String
},
rating_general:{
    type: Number,
    default: 0,
},
rating_user:{
    type: Number,
    default: 0,
},
genero: {
    type: [String]
},
numero_paginas: {
    type: Number
},
fecha_ingreso: {
    type: Date,
    default: Date.now()
},
portada: {
    type: String
},
usuario: {
    type:String,
    required: true
}
 })


const Book = new mongoose.model('books',bookSchema)

module.exports= Book