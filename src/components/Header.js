import React from "react";

export const Header = (props) => {
  return(
    // <nav className="navbar navbar-default">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <ul className="nav navbar-nav">
    //         <li><a href="#">Home</a></li>
    //         <li><a href="#">User</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-light bg-light">
      <ul className="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">User</a></li>
      </ul> 
    </nav>
  );
};