import React from 'react'
 
import Navbar from '../../components/Navbar'

function Hero() {
  return (
    <div className='row hero'>
    <Navbar/>
    <div className='col-lg-6 col-md-10 col-sm-12 info  text-center'>
            <h2>Organiza tu Lectura <br></br> con un Book Journal Digital</h2>
    <p>Registra tus lecturas, escribe reseñas, planifica próximos <br></br>libros y redescubre tu amor por la lectura. Todo en un solo lugar.</p>
<button>Comienza Ahora</button>
    </div>

    </div>
  )
}

export default Hero
