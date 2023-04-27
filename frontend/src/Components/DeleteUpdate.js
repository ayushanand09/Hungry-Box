import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import EmpNavbar from "./EmpNavbar";
// import ItemCard from "./ItemCard";
import DeleteItemCard from "./DeleteItemCard";

const DeleteUpdate = () => {
  const navigate = useNavigate();
  const [productDetails, setProduct] = useState([]);

  const callProductPage = async (e) => {
    // e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/v1/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setProduct(data.products);

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
    callProductPage();
  }, []);


  // const [quantity,setQuantity] = useState();
  // const deleteProduct = async () => {
  //   console.log(item._id);
  //   const res = await fetch(`http://localhost:4000/api/v1/admin/product}`, {
  //   method: "DELETE",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     },
  //     credentials: "include"
  //   });

  //   alert("Product Deleted successfully");
  // }

  return (
    <>
      <EmpNavbar />
      <div id="time">
          <span id="time"></span>
      </div>
      <br></br>
      <div className="order-container">
        <div className="row">
          {
            productDetails.map((item) => (
            <DeleteItemCard item = {item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteUpdate;
