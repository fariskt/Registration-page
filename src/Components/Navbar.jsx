import React from "react";
import "./Home.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2><a href="/">Logo</a></h2>
      </div>
      <div>
        <ul className="nav-item">
         <a href="/"> <li>Home</li></a>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
