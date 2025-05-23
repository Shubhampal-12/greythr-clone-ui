import React from "react";
import "./Navbar.css";
import "../../App.css";
import image from "./logo.png";
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        <a className="navbar-logo">
          <img src={image}  alt="" />
        </a>

        <div className="nav-left">
          <div className="">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="" className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Pricing </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Customar </a>
              </li>
              <li className="nav-item">
                <a href=" " className="nav-link">Resources</a>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <a href="">Request Demo</a>
             <Link to='/login' className="Link">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
