import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          {/* <li>
            <Link to="/welcome">Feedback</Link>
          </li> */}
        </ul>
        <div className="nav-icon">
          <img src={require("../navicon.jpg")} alt="Img not shown" />
          {/* <button className="logout"><Link to="/logout">Logout</Link></button> */}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
