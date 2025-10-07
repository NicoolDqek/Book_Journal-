import React from 'react'
import { Link } from 'react-router-dom'
import DasboardHome from '../layouts/dasboard/DasboardHome'
import Contend from '../layouts/dasboard/Contend'
import NavbarAuth from './NavbarAuth'

export default function NavbarDasboard() {
  return (
    <div>
  
    <div class="row flex-nowrap sideBar">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar  border">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline tittle">JournalBook</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
<li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                           <i class="bi bi-journal-plus fs-4"></i> <span class="ms-1 d-none d-sm-inline">New Book</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Libreria</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Libros</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Autores</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Calendario</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi bi-bookmark-heart-fill"></i> <span class="ms-1 d-none d-sm-inline">Favoritos</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Libros</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Autores</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="bi-pen-fill fs-4"></i> <span class="ms-1 d-none d-sm-inline">Reseñas</span> </a>
                    </li>
                     
                </ul>
                <hr></hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png" alt="hugenerd" width="30" height="30" class="rounded-circle"></img>
                        <span class="d-none d-sm-inline mx-1">Nicool Cueca  </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"></hr>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* contenido*/}
        <div class="col p-4 pt-0 contenido">
          <NavbarAuth/>
            <Contend/>
        </div>
    
</div>

    </div>
  )
}
