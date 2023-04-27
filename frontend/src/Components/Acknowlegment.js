import React from "react";
import {NavLink} from "react-router-dom";
import Navbar_After from "./Navbar_After";
import "../CSS/ErrorPage.css";

const Acknowledgment = () => {
    return(
        <>
        {/* <Navbar /> */}
        <Navbar_After />
        <div className="error">
            <h1>THANKYOU FOR PURCHASING</h1>
            <h3>PLEASE HEAD TO ANNAPURNA TO COLLECT YOUR ORDER :) </h3>
           <button className="error-btn"> <NavLink to = "/order">Continue Ordering :)</NavLink></button>
        </div>
        </>
    )
}

export default Acknowledgment;
