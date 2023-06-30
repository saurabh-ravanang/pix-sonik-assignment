import React from 'react'
import img1 from '../Assets/LOGO.png'

export default function Navbar() {
  return (
    <nav style={{backgroundColor:"black"}} class="navbar navbar-expand-lg bg-body-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img1}  width="30" height="24" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li   class="nav-item">
          <a style={{color:"white"}} class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a style={{color:"white"}} class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item dropdown">
          <a style={{color:"white"}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Brand 1</a></li>
            <li><a class="dropdown-item" href="#">Brand 2</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
