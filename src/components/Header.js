import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return(
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <ul className="nav navbar-nav">
    //         <li><a href="/home">Home</a></li>
    //         <li><a href="/user">User</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="/">Root </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/user">User</a>
      </li>
    </ul>
  </div>
</nav>
  );
};