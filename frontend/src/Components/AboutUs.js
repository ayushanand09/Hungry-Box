import React from "react";
import Navbar from "./Navbar.js";
import "../CSS/Navbar.css";
import "./Footer.js";
import "../CSS/Footer.css";
import "../CSS/AboutUs.css";

class About extends React.Component {
  // state = {  }
  render() {
    return (
      <>
      <Navbar/>
        <div className="about-section">About Us</div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="container-about">
                Ayush Anand
                <a
                  className="button"
                  href="https://github.com/ayushanand09"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/ayush-anand-238305204/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <p class="title">Contributor</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container-about">
                Nalin Banga
                <a
                  className="button"
                  href="https://github.com/jarvis8"
                  target="_blank">
                  Github
                </a>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/nalin-banga-b19a27133/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <p class="title">Contributor</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container-about">
                Namit Atreya
                <a
                  className="button"
                  href="https://github.com/namitatreya2001"
                  target="_blank">
                  Github
                </a>
                <a
                  className="button"
                  href="https://www.linkedin.com/in/namit-atreya-280253252/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <p class="title">Contributor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="repo">
          <a className="button" href="https://github.com/ayushanand09/Hungry-Box" target="_blank">
            Project Repository
          </a>
        </div>
      </>
    );
  }
}

export default About;
