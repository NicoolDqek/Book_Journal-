const { filtrarPorPaginas, searchById } = require("../helpers/books");
const Book = require("../models/BookShema");




 class BookService {
  constructor() {
    this.bookCargados = [];
    this.filtrados = [];
  }

  async cargarLibros(usuarioId) {
    if (!usuarioId) return [];
    this.bookCargados = await Book.find({ usuario: usuarioId });
    return this.bookCargados;
  }

  async filtros(min, max) {
    this.filtrados = filtrarPorPaginas(this.bookCargados, min, max);
    return this.filtrados;
  }

  idFiltro(id) {
    return searchById(this.bookCargados, id);
  }
}



    

const bookService = new BookService();

module.exports = { bookService };


 