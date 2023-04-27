import React, { useState } from "react";
import "../CSS/EmployeeLogin.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Navbar from "./Navbar";

const EmployeeLogin = () => {
  
  //Register
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    email:"",
    password:"",
    role: "admin"
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setEmp({
        ...emp,
        [name]: value
    })
  }

  const register = () => {
    const {name, email, password, role} = emp
    if (name && email && password){
        alert("Registered")
        axios.post("http://localhost:4000/api/v1/register", emp)
        .then((res) => {
            alert("Registered Succesfully!")
            // navigate("/studentLogin")
        })
    }
    else {
        alert("Invalid input")
    }
  }

  //Login
  const [emp2, setEmp2] = useState({
    email: "",
    password: "",
    // showPass: false,
  })

  const handleChange2 = (e) => {
    const {name, value} = e.target
    setEmp2({
        ...emp2,
        [name]: value
    })
  }

  const login = (e) => {
    e.preventDefault();
		axios
			.post("http://localhost:4000/api/v1/login", {
				email: emp2.email,
				password: emp2.password,
        withCredentials: true
			})
			.then((res) => {
				alert("Logged In Succesfully!");
        localStorage.setItem('currentuser',JSON.stringify(res.data))
        navigate("/empwelcome")
			})
      .catch((err) => {
        alert("Invalid Credentials. Please check again")
        console.error(err);
      })
	};

  const employeeAnimate = () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
	    container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
	    container.classList.remove("right-panel-active");
    });
  }

  return (
    <>
    <Navbar />
    <div className="logCard">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form-signIn2" action="">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" value={emp.name} placeholder="Name*" autoComplete="off" onChange={handleChange} />
            <input type="email" name="email" value={emp.email} placeholder="Email*" autoComplete="off" onChange={handleChange} />
            <input type="password" name="password" value={emp.password} placeholder="Password*" autoComplete="off" onChange={handleChange} />
          </form>
        </div>
        <div className="form-container sign-in-container" style={{color: "black", backgroundColor: "white"}}>
          <form action="POST">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-google" />
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin" />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" value = {emp2.email} placeholder="Email" autoComplete="off" onChange={handleChange2}/>
            <input type="password" name="password" value = {emp2.password} placeholder="Password" autoComplete="off" onChange={handleChange2}/>
            <a className="forgot" href="#">Forgot Your Password</a>
            <button onClick={login}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={register}>
                Register
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Employee!</h1>
              <p>Enter your details and start managing :) </p>
              <button className="ghost" id="signUp" onClick={() => employeeAnimate()}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default EmployeeLogin;
