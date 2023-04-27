import React, {useState} from "react";
import "../CSS/StudentLogin.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Navbar from "./Navbar";

axios.defaults.withCredentials   = true

const StudentLogin = () => {

  //Register
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    role:"user"
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
        ...user,
        [name]: value
    })
  }

  const register = () => {
    const {name, email, password, role} = user
    if (name && email && password){
        alert("Registered")
        axios.post("http://localhost:4000/api/v1/register", user)
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
  const [user2, setUser2] = useState({
    email: "",
    password: "",
    // showPass: false,
  })

  const handleChange2 = (e) => {
    const {name, value} = e.target
    setUser2({
        ...user2,
        [name]: value
    })
  }

  const login = (e) => {
    e.preventDefault();
		axios
			.post("http://localhost:4000/api/v1/login", {
				email: user2.email,
				password: user2.password,
        withCredentials: true
			})
			.then((res) => {
				alert("Logged In Succesfully!");
        localStorage.setItem('currentuser',JSON.stringify(res.data))
        navigate("/welcome")

			})
      .catch((err) => {
        alert("Invalid Credentials. Please check again")
        console.error(err);
      })

	};

  const studentAnimate = () => {
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
          <form  action="" className="form-signIn1">
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
            <input type="text" name="name" value={user.name} placeholder="Name*" autoComplete="off" onChange={handleChange} />
            <input type="email" name="email" value={user.email} placeholder="Email*" autoComplete="off" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="Password*" onChange={handleChange}/>
            {/* <input type="password" name="cpassword" value={user.cpassword} placeholder="Confirm Password*" onChange={handleChange}/> */}
          </form>
        </div>
        <div className="form-container sign-in-container" style={{color: "black", backgroundColor: "white"}}>
          <form method="POST" /*onSubmit={handleSubmit}*/>
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
            <input type="email" name="email" value = {user2.email} placeholder="Email" autoComplete="off" onChange={handleChange2}/>
            <input type="password" name="password" value = {user2.password} placeholder="Password"  onChange={handleChange2}/>
            <a className="forgot" href="#">Forgot Your Password</a>
            <button onClick={login}>Sign In</button>
            {/* <button onClick={()=>{login();createCookie()}}>Sign In</button> */}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={register}> Register </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Student!</h1>
              <p>Enter your details and start ordering :) </p>
              <button onClick={() => studentAnimate()} className="ghost" id="signUp">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default StudentLogin;