import React from 'react'

function Login({setIsLoginForm}) {
  return (
    <div className='login'>  
      <h4 className='titulo text-center'>Ingresa en tu cuenta</h4>

    <div class="form-floating mb-3  foros">
  <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
  <label for="floatingInput">Email</label>
</div> 
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Contraseña</label>
</div>
<button>Ingresar</button>
<p>¿No tienes una cuenta? <span onClick={() => setIsLoginForm(false)}>Regístrate</span></p>

    </div>
  )
}

export default Login
