import React, { createContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../CSS/orderFood.css";
import Navbar_After from "./Navbar_After";
import ItemCard from "./ItemCard";


const OrderFood = ({children}) => 
{
  const navigate = useNavigate();
  const [productDetails, setProduct] = useState([]);
  const [search, setSearch] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  let list = [];

  const searchProduct = async () => {
    //GET A SINGLE PRODUCT BY SEARCHING

    let searchField = document.getElementById("search").value;
    // list = productDetails;
    var x = productDetails.find((e) => e.name === searchField);
    // setProduct([x]);

    if (x) {
      console.log(x);
      setSearch(x);
    } else {
      // alert("Product not found")
      console.log(list);
      setSearch({});
      // setProduct(list);
    }

    // console.log(productDetails);
    // console.log(searchField);

    // productDetails.map(searchField)
    // try {
    //   const res = await fetch(`http://localhost:4000/api/v1/admin/product/${searchField}`,{
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     credentials: "include"
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   setProduct(data);

    //   if (!res.status === 200) {
    //     const error = new Error(res.error);
    //     throw error;
    //   }

    // } catch (error) {
    //   console.log(error);
    // }
  };

  const callProductPage = async (e) => {
    // e.preventDefault();
    //GET ALL PRODUCTS ON FRONTEND
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
      // list = await data.products;
      // console.log("hjdsv");
      // console.log(data.products);
      setProduct(data.products);
      // console.log(list)

      // data.products.map((currEle) => {
      //   console.log(currEle)
      // })

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

  // const increment = async (item) => {
  //   // var value = parseInt(document.getElementById('number').innerText); // stack val
  //   var value = item.stock; // stock val
  //   console.log("item name: ", item.name)
  //   value++;
  //   const obj = {
  //     "stock": value
  //   }
  //   console.log("item id: ", item._id)
  //   const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //     body: JSON.stringify(obj)
  //     });

  //     document.getElementById('number').innerText = value;

  //   console.log("value: ", value)
  // }
  // const decrement = async (item) => {
  //   var value = parseInt(document.getElementById('number').innerText); // stack val
  //   // var value = item.stock; // stock val
  //   console.log("item name: ", item.name)
  //   if(value > 1){
  //     value--;
  //     const obj = {
  //       "stock": value
  //     }
  //     console.log("item id: ", item._id)
  //     const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
  //       method: "PUT",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //       body: JSON.stringify(obj)
  //       });

  //     document.getElementById('number').innerText = value;
  //   }
  //   console.log("value: ", value)
  // }

  const updateDB = async (item) => 
  {
    //console.log("db stock check",item.stock);
    const obj = {
      stock: item.stock,
    };

    const res = await fetch(
      `http://localhost:4000/api/v1/admin/product/${item._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(obj),
      }
    );
  };

  const handlePay = () => {
    console.log("dsvjdsvjhsd vhjsvgus vjhs vjgsv gsvcg")
    var totalItem = productDetails.length;
    for (var i = 0; i < totalItem; i++) {
      var st = productDetails[i];
      updateDB(st);
      // console.log(productDetails[i].stock);
    }
  };
  

  return (
    <>
      <Navbar_After />
      <div id="time">
        <span id="time"></span>
      </div>
      <br></br>
      <div class="item-search">
        Search a food item by it's name: &nbsp;
        <input
          type="text"
          placeholder="Search.."
          class="search"
          id="search"
        ></input>
        <button onClick={() => searchProduct()}>Search</button>
      </div>

      <br></br>
      <div className="order-container">
        <div className="row">
          {!search.name ? (
            productDetails.map((item) => (
              <ItemCard
                item={item}
                totalCost={totalCost}
                setTotalCost={setTotalCost}
              />
            ))
          ) : (
            <ItemCard
              item={search}
              totalCost={totalCost}
              setTotalCost={setTotalCost}
            />
          )}
          {
            // console.log("done");
            // handlePay()
          }
        </div>

        <button class="total" onclick={handlePay}>
          <Link to="/gateway">Total: {totalCost}</Link>
        </button>
      </div>
    </>
  );
};
export default OrderFood;
// exports.module = {
//   OrderFood: {OrderFood}
// }
