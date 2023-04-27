import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import EmpNavbar from "./EmpNavbar";

const CreateOrder = () => {
  const navigate = useNavigate();
  const[product, setProduct] = useState({
    name: "",
    price: "",
    stock: ""  
  });

  const handleChange = (e) => {
    const {name,value} = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  const order = () => {
    const {name, price, stock} = product;
    if(name && price && stock){
      alert("Product created");
      axios.post("http://localhost:4000/api/v1/admin/product/new", product)
      .then((res) => {
        alert("Success")
      }).catch((error) => { 
        console.log(error);
        navigate("/")
      })
    }
    else{
      alert("Invalid")
    }
  }
  
  return (
    <>
      <EmpNavbar />
      <div id="time">
          <span id="time"></span>
      </div>
      <h1>Hi, Create your order here</h1>
      <h3>Drop tasty meals for the students</h3>
      <form>
        <div style={{margin:"5rem"}}>
          <input type="text" name="name" placeholder="Name of Product*" autoComplete="off" onChange={handleChange}/>
          <input type="number" name="price" placeholder="Price of Product*" autoComplete="off" onChange={handleChange}/>
          <input type="number" name="stock" placeholder="Total Stock of the Product*" autoComplete="off" onChange={handleChange}/>
          <button style={{margin:"3rem"}} onClick={order}>Create Order</button>
        </div>
      </form>
    </>
  );
};

export default CreateOrder;
