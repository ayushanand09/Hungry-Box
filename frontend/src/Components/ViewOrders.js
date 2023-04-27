import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
// import "../CSS/ViewOrders"
import { useNavigate } from "react-router-dom";

// const displayTime = () => {
//     const time = new Date();
//     document.getElementById('time').innerHTML = time;
// }
// setInterval(displayTime, 1000);

const ViewOrders = () => {
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
      <div id="time" style={{ marginBottom: "15rem" }}>
        <span id="time"></span>
      </div>
      <div className="order-list-container">
        <h1>View all orders placed </h1>
      </div>
      <h3> No orders placed yet :( </h3>
    </>
  );
};

export default ViewOrders;
