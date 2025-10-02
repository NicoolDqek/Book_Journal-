import React from 'react'


function Register({setIsLoginForm}) {


  return (
    <div className='register'>  
    
      <h4 className='titulo text-center'>Registrarse</h4>

    <div class="form-floating mb-3  foros">
  <input type="text" class="form-control" id="floatingInput" placeholder="Nombre"></input>
  <label for="floatingInput">Nombre</label>
</div> 
  <div class="form-floating mb-3  foros">
  <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
  <label for="floatingInput">apellido</label>
</div> 
  <div class="form-floating mb-3  foros">
  <input type="email" class="form-control p-0" id="floatingInput" placeholder="Email"></input>
  <label for="floatingInput">Email</label>
</div> 
 <div class="form-floating mb-3  foros">
  <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
  <label for="floatingInput">Contraseña</label>
</div> 
<button>Registrarse</button>

<p>¿Ya tienes una cuenta? <span onClick={() => setIsLoginForm(true)}>Inicia sesión</span></p>


    </div>
  )
}

export default Register
