import React from 'react'
import './Subheader.css'

function Content() {
  return (
    <nav class="nav">
    <a class="nav-link1 active" aria-current="page" href="#">Whatsapp</a>
    <a class="nav-link1" href="#">Telefono</a>
    <a class="nav-link1" href="#">Email</a>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button class="btn btn-outline" type="submit">Buscar</button>
      </form>
  </nav>
  )
}

export default Content