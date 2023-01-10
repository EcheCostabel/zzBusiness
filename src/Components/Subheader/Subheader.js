import React from 'react'
import './Subheader.css'

function Content() {
  return (
    <nav class="nav">
    <a class="nav-link active" aria-current="page" href="#">Whatsapp</a>
    <a class="nav-link" href="#">Telefono</a>
    <a class="nav-link" href="#">Email</a>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </nav>
  )
}

export default Content