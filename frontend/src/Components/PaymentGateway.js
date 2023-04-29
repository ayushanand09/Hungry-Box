import React , {useContext} from "react";
import "../CSS/Gateway.css";
import Navbar_After from "./Navbar_After";
import { Link } from "react-router-dom";


const cardNumber = () => {
  document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText =
      document.querySelector(".card-number-input").value;
  };
};

const cardHolderName = () => {
  document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-holder-name").innerText =
      document.querySelector(".card-holder-input").value;
  };
};

const monthInput = () => {
  document.querySelector(".month-input").oninput = () => {
    document.querySelector(".exp-month").innerText =
      document.querySelector(".month-input").value;
  };
};

const yearInput = () => {
  document.querySelector(".year-input").oninput = () => {
    document.querySelector(".exp-year").innerText =
      document.querySelector(".year-input").value;
  };
};

const cvvInput = () => {
  document.querySelector(".cvv-input").oninput = () => {
    document.querySelector(".cvv-box").innerText =
      document.querySelector(".cvv-input").value;
  };
};

const cvvDisplay = () => {
  document.querySelector(".cvv-input").onmouseenter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };
};

const cvvNotDisplay = () => {
  document.querySelector(".cvv-input").onmouseleave = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };
};
console.log("hello")
// console.log("allProduct Test",allProduct)
const PaymentGateweay = () => {
  return (
    <>
      <Navbar_After />
      <div id="time">
        <span id="time"></span>
      </div>
      <br></br>
      <div className="container-gateway">
        <div className="card-container">
          <div className="front">
            <div className="image">
              {/* <img src="./chip.png" alt="" /> */}
              <img
                src={require("./chip.png")}
              />
              <img src={require("./visa.png")}/>
              {/* <img src="./visa.png" alt="" /> */}
            </div>
            <div className="card-number-box">----------------</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder name</span>
                <div className="card-holder-name">full name</div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">mm</span>
                  <span className="exp-year">yy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="back">
            <div className="stripe" />
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box" />
              <img src={require("./visa.png")} />
              {/* <img src="image/visa.png" alt="" /> */}
            </div>
          </div>
        </div>
        <form action="">
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength={16}
              className="card-number-input"
              onInput={() => cardNumber()}
            />
          </div>
          <div className="inputBox">
            <span>card holder name</span>
            <input
              type="text"
              className="card-holder-input"
              onInput={() => cardHolderName()}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                name=""
                id=""
                className="month-input"
                onInput={() => monthInput()}
              >
                <option value="month" selected="" disabled="">
                  month
                </option>
                <option value={"01"}>January</option>
                <option value={"02"}>February</option>
                <option value={"03"}>March</option>
                <option value={"04"}>April</option>
                <option value={"05"}>May</option>
                <option value={"06"}>June</option>
                <option value={"07"}>July</option>
                <option value={"08"}>August</option>
                <option value={"09"}>September</option>
                <option value={"10"}>October</option>
                <option value={"11"}>November</option>
                <option value={"12"}>December</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                name=""
                id=""
                className="year-input"
                onInput={() => yearInput()}
              >
                <option value="year" selected="" disabled="">
                  year
                </option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="password"
                maxLength={3}
                className="cvv-input"
                onMouseEnter={() => cvvDisplay()}
                onMouseLeave={() => cvvNotDisplay()}
                onInput={() => cvvInput()}
              />
            </div>
          </div>
          or <br></br>
          <Link to="/wallet">use your wallet</Link>
          {/* <input type="submit" defaultValue="submit" className="submit-btn" /> */}
          {/* <Link to="/ack"></Link> </input> */}
          <button type = "submit"className="submit-btn"><Link to="/ack"> Pay </Link></button>
        </form>
      </div>
    </>
  );
};

export default PaymentGateweay;
