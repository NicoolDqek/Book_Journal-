import React from 'react'
  
function SectionInfo() {
  return (
 <div>
  <h6 className='text-center titulo-cards'>Servicios Disponibles</h6>

<div className="row cards">

<div className="col-lg-3 col-md-6 col-sm-6">
<div className="card">
  <div className="card-body">
    <i class="bi bi-book-fill"></i>
    <p className="card-text">Organiza tus lecturas por portadas, como si fuera tu propia biblioteca personal en línea..</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="card" >
  <div className="card-body">
    <i class="bi bi-pencil-square"></i>
    <p className="card-text">Escribe tus pensamientos con estilo: usa tipografías tipo diario o añade notas hechas a mano.</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="card" >
  <div className="card-body">
    <i class="bi bi-cloud-fill"></i>
    <p className="card-text">Guarda fragmentos memorables de tus libros y resáltalos con fondos o diseños personalizados.</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
  <div className="card" >
  <div className="card-body">
    <i class="bi bi-bookmarks-fill"></i>  
    <p className="card-text">Crea y organiza tus libros, autores y géneros preferidos en colecciones privadas o públicas.</p>
  </div>
</div>
</div>

</div>

  <div className="row section-1">
    <div className="col-lg-5 col-md-6 col-sm-12 left">
      <img
        src="https://media.istockphoto.com/id/1937520384/photo/young-man-reading-the-bible.jpg?s=612x612&w=0&k=20&c=jZ6qNmz_LUFKwSGO3mTw0JfUbAFhJtj0Wr2wndySMJU="
        alt=""
        className="img-fluid"
      />
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 right">
      <h6>¿Por qué usar nuestro Book Journal?</h6>
      <p>
        Nuestra herramienta está diseñada para lectores como tú: organiza tus libros, escribe reseñas personales y guarda tus momentos favoritos de lectura.
      </p>
    </div>
  </div>

  <div className="row section-2 align-items-center pt-5">
   
    <div className="col-lg-6 col-md-6 col-sm-12  left">
      <img
        src="https://wallpaper.forfun.com/fetch/a8/a81aa4f6bf831135150cfe19745ef09c.jpeg"
        alt=""
        className="img-fluid mb-3"
      />
      <img
        src="https://aesthetica.hu/wp-content/uploads/Az-olvasas-jotekony-hatasai-800x420.jpg"
        alt=""
        className="img-fluid"
      />
    </div>

    
    <div className="col-lg-5 col-md-6 col-sm-12  right">
      <h6>¿Qué puedes hacer con Book Journal?</h6>
      <p>
        Registra tus lecturas, guarda frases memorables, reflexiona y construye tu historia lectora.
      </p>
    </div>
  </div>

  <div className='row section-3'>

      <div className="col-lg-6 col-md-6 col-sm-12  left">
      <h6>Tu espacio, tu estilo</h6>
      <p>
       Haz que tu diario refleje tu forma de leer.<br></br>
Añade portadas de libros, fotos personales, notas manuscritas o cualquier cosa que te conecte con tu experiencia lectora.<br></br>
Este es tu rincón personal para recordar, reflexionar y revivir cada historia.
      </p>
    </div>
  <div className="col-lg-6 col-md-6 col-sm-12  right mt-5">
      <img
        src="https://images.ft.com/v3/image/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F98b79a4e-fefb-11e8-aebf-99e208d3e521?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1                                                                                                       "
        alt=""
        className="img-fluid mb-3"
      />
     
    </div>
    
  </div>
</div>

      
  )
}

export default SectionInfo
