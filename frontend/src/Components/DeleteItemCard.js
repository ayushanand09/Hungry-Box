import React, { useState } from "react";

const DeleteItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState();

  const deleteProduct = async () => {
    console.log(item._id);
    const res = await fetch(`http://localhost:4000/api/v1/admin/product/${item._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
      credentials: "include"
    });
    
    alert("Product Deleted successfully");
    window.location.reload()
  };
  return (
    <>
      <div className="order-card">
        <img
          className="card-img-top"
          src={require("./food.jpg")}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" style={{}}>
            {item.name}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                deleteProduct();
              }}
              style={{
                borderRadius: "1rem",
                backgroundColor: "black",
                color: "white",
                width: "15rem",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteItemCard;
