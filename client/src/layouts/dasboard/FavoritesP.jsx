import React from 'react'
import CardBook from '../../components/CardBook'

export default function FavoritesP() {
  return (
    <div className='favorites'>
       <div className="hero_d">
        <div className="row">
          <div className="col-lg-3 col-md-5 col-sm-10 mx-auto mx-md-0">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2wb_rU6Be2gD9YfP_h0l04q2EeFoMU8u5NPGVKpoQCRokGwBSuXnDXBD8OVwSXk_e2k&usqp=CAU" alt="" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-10 info_book mt-sm-4  mx-auto mx-md-0">
           <h3>little mushroom </h3>
           <h6>Author name</h6>
           <h6>Rating </h6>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit voluptatibus, corrupti dolorem laborum, a nihil amet cum quia distinctio sed placeat aspernatur quibusdam suscipit veritatis sunt, cumque nostrum illum!</p>
           <button className='btn'>Ver Informacion</button>
          </div>
        </div>
       </div>

       <h2 className='mx-0 mx-md-0 text-center'>Libros Favoritos</h2>

       <div className="row favorite-gallery mx-0 mx-md-0 p-4 m-2">
       <CardBook/>
       <CardBook/>
       <CardBook/>
       <CardBook/>
       <CardBook/>
       <CardBook/>
       <CardBook/>
       <CardBook/>

       </div>
    </div>
  )
}
