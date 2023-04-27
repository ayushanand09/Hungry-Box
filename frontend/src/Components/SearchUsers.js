import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmpNavbar from "./EmpNavbar";
import "../CSS/SearchUser.css";
import UserCard from "./UserCard";

const SearchUsers = () => {
  const navigate = useNavigate();
  const [UserDetails, setProduct] = useState([]);
  const [search, setSearch] = useState({});
  let list = [];
  
  const searchUser = async () => {
    //GET A SINGLE USER BY SEARCHING
    let searchField = document.getElementById('search').value;
    var x = UserDetails.find(e => e.name === searchField);

    if(x){
      console.log(x);
      setSearch(x);
    }
    
    else{
      console.log(list);
      setSearch({});
    }
  }

  const callUserPage = async (e) => {
    // e.preventDefault();
    
    //GET ALL PRODUCTS ON FRONTEND
    try {
      const res = await fetch("http://localhost:4000/api/v1/admin/users", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setProduct(data.users);

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
    callUserPage();
  }, []);

  return (
    <>
      <EmpNavbar />
      <div id="time">
        <span id="time"></span>
      </div>
      <br></br>
      <div class="item-search">
        Search a user by it's name: &nbsp;
        <input type="text" placeholder="Search.." class="search" id = "search">
        </input>
        <button onClick={() => searchUser()}>Search</button>
      </div>

      <br></br>
      <div className="order-container">
        <div className="row">
        {
        (!search.name) ? UserDetails.map((item) => (
          <UserCard item={item}/>
        )) : <UserCard item = {search}/>
        }
        </div>       
      </div>
    </>
  );
};

export default SearchUsers;