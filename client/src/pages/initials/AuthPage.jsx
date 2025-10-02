import React, { useState } from 'react'
import CardLogin from '../../layouts/register/CardLogin'
import Login from '../../layouts/register/Login'
import Register from '../../layouts/register/Register'
import Navbar from '../../components/NavbarAuth'

function AuthPage() {

const [isLoginForm, setIsLoginForm] = useState(true)

  return (
    <div className='container-fluid AuthPage'>
        <div className='row '>
           <div className="col-lg-6 col-md-5 col-sm-12 p-0">
           <Navbar/>
          

         {isLoginForm ? (
  <Login setIsLoginForm={setIsLoginForm} />
) : (
  <Register setIsLoginForm={setIsLoginForm} />
)}

           </div>
           <div className="col-lg-6 col-md-5 col-sm-12 p-0">
            <CardLogin/>
           </div>
        </div>
      
    </div>
  )
}

export default AuthPage
