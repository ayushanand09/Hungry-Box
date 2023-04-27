import React from "react";
import "../CSS/Navbar.css";
import { Link,useNavigate } from "react-router-dom";

const Navbar_After = () => {
  const navigate = useNavigate();
  const callLogout = async (e) => {
    
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/v1/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      navigate("/");
      console.log("logged out");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      // navigate("/")
    }
  };
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          <li>
            <Link to="/order">Order Food</Link>
          </li>
          {/* <li>
            <Link to="/gateway">Checkout</Link>
          </li> */}
          <li>
            <Link to="/aboutme">About You</Link>
          </li>
        </ul>
        <div className="nav-icon">
          <img src={require("../navicon.jpg")} alt="Img not shown" />
          <button className="logout" onClick={callLogout}>
            <Link to="/">Logout</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar_After;
