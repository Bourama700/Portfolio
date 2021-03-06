
import React from 'react';
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars}   from  '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
<nav id="navbar" className="navbar navbar-example2 navbar-expand-lg navbar-light bg-dark ">

  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo ...." /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  scrollto" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link  scrollto" href="#about">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  scrollto" href="#service">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  scrollto" href="#work">How work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  scrollto" href="#portfolio">Portfolio</a>
        </li>
         <li className="nav-item ">
          <a className="nav-link  scrollto" href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
 
</nav>
    )
}

export default NavBar
