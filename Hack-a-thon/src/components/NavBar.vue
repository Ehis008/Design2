<script setup>
import {RouterLink, RouterView} from "vue-router"
</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand text-dark" href="#">PrimeNews</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse shadow-lg" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
         <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
         <li class="nav-item">
            <RouterLink to="/AboutUs" class="nav-link">AboutUs</RouterLink>
          </li>
         <li class="nav-item">
            <RouterLink to="/ContactUs" class="nav-link">ContactUs</RouterLink>
          </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Business</a></li>
            <li><a class="dropdown-item" href="#">Technology</a></li>
          
            
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
</nav>
  <RouterView/>
</template>