import React from "react";
const UserCard = ({ item }) => {

const deleteUser = async () => {
    console.log(item._id);
    const res = await fetch(`http://localhost:4000/api/v1/admin/singleUser/${item._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
      credentials: "include"
    });
    
    alert("User Profile deleted successfully");
    window.location.reload()
}

  return (
    <>
      <div className="user-card">
        <img
          className="card-img-top"
          src={require("./demoImage.png")}
          alt=""
        />
        <div className="card-body">
            <h4>User Information</h4> 
          <h5 className="card-title" style={{fontSize: "1.5rem"}}>
            Name: {item.name}
          </h5>
          <p className="card-text">
            <h5>Email: {item.email}</h5>
            <h5>Role: {item.role}</h5>
          </p>
          <br></br>
          <button onClick={() => {deleteUser()}}> Delete </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;