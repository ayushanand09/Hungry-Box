import React from "react";
import "../CSS/Navbar.css";
import { Link,useNavigate } from "react-router-dom";

const EmpNavbar = () => {
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
            <Link to="/empwelcome">Home</Link>
          </li>
          <li>
            <Link to="/createorder">Create Item</Link>
          </li>
          <li>
            <Link to="/deleteUpdate">Delete Item</Link>
          </li>
          <li>
            <Link to="/vieweorder">View Orders</Link>
          </li>
          <li>
            <Link to="/searchUser">Search Users</Link>
          </li>
          <li>
            <Link to="/empabout">About You</Link>
          </li>
        </ul>
        <div className="nav-icon">
          <img src={require("../navicon.jpg")} alt="Img not shown" />
          <button className="logout" onClick={callLogout}><Link to="/">Logout</Link></button>
        </div>
      </nav>
    </header>
  );
};

export default EmpNavbar;
