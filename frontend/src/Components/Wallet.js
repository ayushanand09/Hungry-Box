import React from "react";
import "../CSS/Wallet.css";
import Navbar_After from "./Navbar_After";
// import { Link } from "react-router-dom";

const addMoney = () => {
  const balanceEl = document.getElementById("balance-wallet");
  const addMoneyBtn = document.getElementById("add-money-btn");

  let balance = 100;

  balanceEl.textContent = "$" + balance;

  addMoneyBtn.addEventListener("click", function () {
    const amount = parseInt(prompt("Enter amount to add:"));

    if (isNaN(amount) || amount < 0) {
      alert("Invalid amount!");
      return;
    }

    balance += amount;
    balanceEl.textContent = "$" + balance;
  });
};

const Wallet = () => {
  return (
    <>
      <Navbar_After />
      <div id="time">
        <span id="time"></span>
      </div>
      <div className="container-wallet">
        <h1>Student Wallet</h1>
        <div className="card-wallet">
          <h2>Your Wallet Balance</h2>
          <p className="balance-wallet">Rs. 100</p>
          <button className="btn-wallet" id="add-money-btn" onClick={addMoney}>
            Add Money
          </button>
        </div>
      </div>
    </>
  );
};

export default Wallet;  