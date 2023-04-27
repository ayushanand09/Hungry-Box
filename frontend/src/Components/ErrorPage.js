import React from "react";
import {useNavigate, NavLink} from "react-router-dom";
import Navbar from "./Navbar";
import "../CSS/ErrorPage.css";

const ErrorPage = () => {
    return(
        <>
        {/* <Navbar /> */}
        <div className="error">
            <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
            <h3>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR IS TEMPORARILY UNAVAILABLE</h3>
            <button className="error-btn"> <NavLink to = "/">Go back to homepage</NavLink></button>
        </div>
        </>
    )
}

export default ErrorPage;
