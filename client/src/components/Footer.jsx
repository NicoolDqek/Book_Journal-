import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="footer text-light pt-5 pb-3">
  <div class="container">
    <div class="row">
      
     
      <div class="col-md-4 mb-4 p-3">
        <h4 class="logo-text">Book Journal</h4>
        <p>
          Guarda tus lecturas, reflexiona sobre cada historia y crea tu propia biblioteca de experiencias.
        </p>
      </div>

    
      <div class="col-md-4 mb-4">
        <h5>Secciones</h5>
        <ul class="list-unstyled">
          <li><a href="#library" class="text-light text-decoration-none">Mi Biblioteca</a></li>
          <li><a href="#reviews" class="text-light text-decoration-none">Reseñas</a></li>
          <li><a href="#favorites" class="text-light text-decoration-none">Favoritos</a></li>
          <li><a href="#stats" class="text-light text-decoration-none">Estadísticas</a></li>
        </ul>
      </div>

 
      <div class="col-md-4 mb-4">
        <h5>Contacto</h5>
        <form>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Tu correo" />
          </div>
          <div class="mb-2">
            <textarea class="form-control" rows="2" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" class="btn btn-light btn-sm">Enviar</button>
        </form>
      </div>

    </div>

    <hr class="border-light" />


    <div class="text-center small">
      © 2025 Book Journal. Todos los derechos reservados.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
