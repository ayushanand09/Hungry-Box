import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar_After from "./Navbar_After";
import "./Footer.js";

import "../CSS/AboutMe.css";

const AboutMe = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutMePage = async (e) => {
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
    //   console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    callAboutMePage();
  });

  return (
    <>
      <Navbar_After />
      <div className="aboutme">
        <div id="time">
          <span id="time"></span>
        </div>
        <div className="section">
          <form method="GET">
            <div className="container">
              <div className="content-section">
                <div className="title">
                  <h1>About You</h1>
                </div>
                <div className="content">
                  <h3>Name: {userData.name}</h3>
                  <p>Email: {userData.email}</p>
                </div>
                <div className="social">
                  <a href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href>
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="image-section">
              <img
              className="card-img-top"
              // src={require("./food.jpg")}
              src={require("./demoImage.png")}
              alt="Card image cap"
              style={{    height: '30rem',
                width: '30rem'}}
            />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
