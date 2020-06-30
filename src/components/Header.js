import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="/home">Home</a></li>
            <li><a href="/user">User</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};