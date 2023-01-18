import React from 'react'
import './Header.css'
import logo1 from './logo1.png'

function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo1} alt='logo' class='img-fluid'/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Empresa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Soluciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Porcelanatos</a></li>
                  <li><a class="dropdown-item" href="#">Revestimientos</a></li>
                  <li><a class="dropdown-item" href="#">Adhesivos</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header