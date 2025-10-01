import React from 'react'
import CardLogin from '../layouts/register/CardLogin'
import Login from '../layouts/register/Login'

function AuthPage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
           <div className="col-lg-7 col-md-5 col-sm-12">
           <Login/>
           </div>
           <div className="col-lg-7 col-md-5 col-sm-12">

           </div>
        </div>
      
    </div>
  )
}

export default AuthPage
