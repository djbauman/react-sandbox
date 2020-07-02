import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return(

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to={"/"} >Root</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/home"} >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/user/10"} >User</Link>
        </li>
      </ul>
    </div>
  </nav>  

  );
};