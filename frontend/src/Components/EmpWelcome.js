import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
import { useNavigate } from "react-router-dom";

// const displayTime = () => {
//     const time = new Date();
//     document.getElementById('time').innerHTML = time;
// }
// setInterval(displayTime, 1000);

const EmpWelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  const callUsername = async (e) => {
    // e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/v1/aboutme", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log(data);
      setUsername(data.name);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    callUsername();
  });
  
    return (
    <>
    <EmpNavbar />
    <div id="time" style={{marginBottom:'15rem'}}>
      <span id="time"></span>
    </div>
     <div className="home">
      <div className="home-div h-100 d-flex justify-content-center align-items-center" >
        <div className="d-flex justify-content-center align-items-center">
          <p className="fs-3" style={{letterSpacing:"5rem",color:"brown", fontSize:"5rem", fontWeight: "bold"}}>WELCOME</p>
        </div>
          <h1>{username}</h1>
          <h2>We are happy to have you back:)</h2>
      </div>
    </div>
    </>
    )
}

export default EmpWelcomePage;