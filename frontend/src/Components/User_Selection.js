import React from "react";
import { Link } from "react-router-dom";
import "../CSS/User_Selection.css";
import Navbar from "./Navbar";

class User_Selection extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <div className="container-user">
        <button className="emp">
          <Link to="/studentLogin">Student Login</Link>
        </button>
        <button className="emp">
          <Link to="/employeeLogin">Employee Login</Link>
        </button>
        <div className="container1">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img
                  src={require("./IMG_0933.jpg")}
                  alt="IMG not available"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="item">
                <img
                  src={require("./IMG_0937.jpg")}
                  alt="IMG not available"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="item">
                <img
                  src={require("./IMG_3023.jpg")}
                  alt="IMG not available"
                  style={{ width: "100%" }}
                />
              </div>
              {/* <div className="item active">
                <img
                  src={require("./JIIT-Noida.jpg")}
                  alt="IMG not available"
                  style={{ width: "100%" }}
                />
              </div> */}
            </div>
            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        
      </div>
      </>
    );
  }
}

export default User_Selection;
