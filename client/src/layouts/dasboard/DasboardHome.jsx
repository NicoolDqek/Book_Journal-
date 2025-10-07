import React from 'react'
import CardHome from '../../components/CardHome'
import MiniCardAuthor from '../../components/miniCardAuthor'
import MiniCartBook from '../../components/MiniCartBook'

export default function DasboardHome() {
  return (
    <div>
      <div className="row hero_d">
    <div className="colcard text-center">     
  <div class="card-body">
    <h5 class="card-title">Bienvenido/a de vuelta Nicool</h5>
    <p class="card-text">Bienvenido/a a tu diario de lectura, un espacio para registrar,<br></br>reflexionar y disfrutar cada página que lees.</p>
    <a href="#" class="btn btn-primary">conocer Mas</a>
  </div>
   
</div>
        </div>

<div className="row targetas p-4">
       <div class="card col-lg-3 col-md-3  col-sm-5">
  <div class="">
    <h5 class="card-title">Libros  <br />Leidos</h5>
    <h2>100</h2>
  </div>
</div>

  <div class="card col-lg-3 col-md-3  col-sm-5">
  <div class="">
    <h5 class="card-title">Libros <br /> Guardados</h5>
  </div>
    <h2>67</h2>

</div>

  <div class="card col-lg-3 col-md-3  col-sm-5">
  <div class="">
    <h5 class="card-title text-center">Autores <br /> Leidos</h5>
    <h2>7</h2>

  </div>
</div>

</div>

<div className="row recomedation">
  <div className="col-lg-9 col-sm-6 col-sm-4 popular p-5 pt-4">
  <h5 className='pb-3 '>popular</h5>
  <div className='row'>
  <CardHome/>
  <CardHome/>
  <CardHome/>
  <CardHome/>

 <h5 className='pb-3'>Pendientes</h5>
  <div className='row'>
  <CardHome/>
  <CardHome/>
  <CardHome/>
  <CardHome/>
</div>
</div>
  </div>
<div className="col-lg-3 col-sm-5 col-sm-12 user_data">
  
  <div className="row autores">
    <h6 className='text-center mt-3'>Autores Mas leidos</h6>

   <MiniCardAuthor/>
  <MiniCardAuthor/>
  </div>
  
 
    <div className="row books">
    <h6 className='text-center mt-3 '>Mejores Calificados</h6>

     <MiniCartBook/>
     <MiniCartBook/>
     <MiniCartBook/>
     <MiniCartBook/>
  </div>
  </div>
</div>




      </div>
  )
}

 
